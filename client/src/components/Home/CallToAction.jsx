import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 sm:p-10">
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 px-8 sm:px-12 py-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

        <div>
          <h2 className="text-3xl font-bold text-white">
            Ready to Build Your Dream Resume?
          </h2>

          <p className="mt-3 text-indigo-100 max-w-lg">
            Create ATS friendly resumes, get AI suggestions,
            upload existing resumes, and share them instantly with recruiters.
          </p>
        </div>

        <Link
          to="/app"
          className="flex items-center gap-2 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 transition px-8 py-4 font-semibold shadow-lg"
        >
          Build Resume Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>

      </div>
    </div>
  )
}

export default CallToAction