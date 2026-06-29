import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#1B004D] to-[#2E0A6F] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">

        <Link to="/" className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold">
            resume<span className="text-green-400">.</span>
          </h2>
        </Link>

        <p className="text-center max-w-2xl text-indigo-100 leading-relaxed">
          Build ATS friendly resumes with AI assistance, customize beautiful templates,
          upload existing resumes, and share them instantly with recruiters all in one place.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm text-indigo-200">
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Public Resumes</a>
          <a href="mailto:aryaraj@example.com">Contact</a>
        </div>

      </div>

      <div className="border-t border-violet-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-indigo-200">

          <p>
            © {new Date().getFullYear()} Resume Builder. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://github.com/Evilsoul1"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/arya-raj-83908a253/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:arya14728@email.com"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer