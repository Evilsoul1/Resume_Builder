import React from 'react'
import { ExternalLink } from 'lucide-react'

const Testimonial = () => {

    const resumes = [
        {
            name: "Arya Raj",
            title: "Software Developer",
            template: "Classic Template",
            image: "/Arya.png",
            link: "https://resume-builder-seven-khaki.vercel.app/view/6a414afe368a1e4860e17402"
        },
        {
            name: "Jane Smith",
            title: "Full Stack Engineer",
            template: "Modern Template",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            link: "https://resume-builder-seven-khaki.vercel.app/view/xxxxxxxxxxxxxxxx"
        },
        {
            name: "Bonnie Green",
            title: "UX Designer",
            template: "Minimal Template",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
            link: "https://resume-builder-seven-khaki.vercel.app/view/yyyyyyyyyyyyyyyy"
        }
    ]

    return (
        <section id="testimonials" className="py-20">

            <div className="text-center">
                <h2 className="text-4xl font-bold">
                    Explore Public Resumes
                </h2>

                <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                    Discover professional resumes created with our AI Resume Builder.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 px-6">

                {resumes.map((resume, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                    >

                        <img
                            src={resume.image}
                            alt={resume.name}
                            className="w-full h-64 object-cover"
                        />

                        <div className="p-6">

                            <h3 className="text-xl font-semibold">
                                {resume.name}
                            </h3>

                            <p className="text-gray-600 mt-1">
                                {resume.title}
                            </p>

                            <p className="text-sm text-indigo-600 mt-2 font-medium">
                                {resume.template}
                            </p>

                            <a
                                href={resume.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
                            >
                                View Resume
                                <ExternalLink size={18} />
                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    )
}

export default Testimonial