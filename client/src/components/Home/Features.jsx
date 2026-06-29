import React from "react";
import Title from "./Title";
import Arya from '../../assets/Arya.png'

const Features = () => {
  return (
    <div id="features" className="flex flex-col items-center my-10 scroll-mt-12 pb-20">
      <div className="flex items-center space-x-2.5 border border-blue-500/30 rounded-full bg-blue-500/20 p-1 text-sm text-blue-600">
        <div className="flex items-center space-x-1 bg-blue-500 text-white rounded-3xl px-3 pl-1 py-1">
          <img
            className="h-6 w-6 rounded-full"
            src={Arya}
            alt="user"
          />
          <p>Arya</p>
        </div>

        <p className="pr-3">Build your resume now</p>
      </div>

      <h1 className="text-3xl font-semibold text-center mx-auto pt-12">
        Everything You Need to Build a Winning Resume
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        Create ATS friendly resumes, customize professional templates, and get AI powered suggestions to help you stand out and land more interviews.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-12 mt-16">

        <div className="max-w-150 hover:-translate-y-1 transition duration-300 rounded-3xl shadow-lg hover:shadow-2xl p-4 ">
          <div className="bg-slate-600 rounded-2xl p-0.5">
          <img
            className="rounded-xl h-64 object-cover"
            src="/AI_Enhance.png"
            alt=""
          />
          </div>
          <h3 className="text-base font-semibold text-slate-700 mt-4">
            AI Resume Generation
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Create professional resumes in minutes with AI suggestions.
          </p>
        </div>

        <div className="max-w-80 hover:-translate-y-1 transition duration-300 rounded-3xl shadow-lg hover:shadow-2xl p-4">
          <div className="bg-slate-600 rounded-2xl p-0.5">
          <img
            className="rounded-xl h-64 object-cover"
            src="/Upload.png"
            alt=""
          />
          </div>
          <h3 className="text-base font-semibold text-slate-700 mt-4">
            Smart Resume Parsing
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Upload your existing resume and automatically extract your information.
          </p>
        </div>

        <div className="max-w-80 hover:-translate-y-1 transition duration-300 rounded-3xl shadow-lg hover:shadow-2xl p-4">
          <div className="bg-slate-600 rounded-2xl p-0.5 overflow-hidden">
          <img
            className="w-full h-64 object-cover rounded-xl"
            src="/templates.png"
            alt=""
          />
          </div>
          <h3 className="text-base font-semibold text-slate-700 mt-4">
            Multiple ATS Friendly Templates
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Choose from elegant, recruiter friendly templates and customize them instantly.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Features;
