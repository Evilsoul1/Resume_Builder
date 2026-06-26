import geminiAI from "../configs/geminiAI.js";
import Resume from "../models/Resume.js";

//controller for enhancing resume summary
//POST: /api/ai/enhance-pro-sum
export const enhanceProfessionalSummary=async(req,res)=>{
    try {
        const {userContent}=req.body;
        if(!userContent){
            return res.status(400).json({message:"Resume summary not available"});
        }

        const response=await geminiAI.interactions.create({
            model: process.env.GEMINI_MODEL,
            input: `You are an expert in resume writing. Your task is to enhance the professional summary of a resume. The summary should be 1-2 sentences also highlighting key skills, experience, and career objectives. Make it compelling and ATS-friendly. and only return text no options or anything else
                Resume Summary:${userContent}`,
        });

        const enhancedContent=response.output_text;
        return res.status(200).json({enhancedContent});
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}

//controller for enhancing resume job description
//POST: /api/ai/enhance-job-desc
export const enhanceJobDescription=async(req,res)=>{
    try {
        const {userContent}=req.body;
        if(!userContent){
            return res.status(400).json({message:"Resume job description not available"});
        }

        const response=await geminiAI.interactions.create({
            model: process.env.GEMINI_MODEL,
            input: `You are an expert in resume writing. Your task is to enhance the job description of a resume. The job description should be 1-2 sentences also highlighting key responsibilities and achievements. Use action verbs and quantifiable results where possible. Make it compelling and ATS-friendly. and only return text no options or anything else
                Resume Job Description:${userContent}`,
        });

        const enhancedContent=response.output_text;
        return res.status(200).json({enhancedContent});
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}

//controller for uploading a resume to the database
//POST: /api/ai/upload-resume
export const uploadResume=async(req,res)=>{
    try {
        const {resumeText, title}=req.body;
        const userId=req.userId;
        if(!resumeText){
            return res.status(400).json({message:"Resume missing"});
        }

        const response=await geminiAI.interactions.create({
            model: process.env.GEMINI_MODEL,
            input: `You are an expert AI agent to extract data from resume. Here is the resume
                Resume :${resumeText}
                Provide data in the following JSON format with no additional text before or after:
                {professional_summary: { type: String, default: '' },
                skills: [{ type: String }],
                personal_info: {
                    image: { type: String, default: '' },
                    full_name: { type: String, default: '' },
                    profession: { type: String, default: '' },
                    email: { type: String, default: '' },
                    phone: { type: String, default: '' },
                    location: { type: String, default: '' },
                    linkedin: { type: String, default: '' },
                    website: { type: String, default: '' }
                },
                experience: [
                    {
                        company: { type: String },
                        position: { type: String },
                        start_date: { type: String },
                        end_date: { type: String },
                        description: { type: String },
                        is_current: { type: Boolean },
                    },
                ],
                project: [
                    {
                        name: { type: String },
                        type: { type: String },
                        description: { type: String },
                    },
                ],
                education: [
                    {
                        institution: { type: String },
                        degree: { type: String },
                        field: { type: String },
                        graduation_date: { type: String },
                        gpa: { type: String },
                    },
                ]},
                `,
            response_format:{type:'json_object'}
        });

        const extractedData=response.output_text;
        const parsedData=JSON.parse(extractedData);
        const newResume=await Resume.create({userId, title, ...parsedData})
        return res.status(200).json({resumeId:newResume._id});
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}