import React from 'react'
import { Link } from 'react-router-dom';
import {Sparkles} from 'lucide-react';

const Hero = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return (
        <>
            <header className='flex flex-col items-center bg-[#FAFAFA] text-black pb-12'>

                <nav className="flex flex-col items-center w-full" >
                    <div className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-4 w-full">
                        <a href="#">
                            <img src="logo.svg" alt="logo not found" className='h-11 w-auto'/>
                        </a>
                        <div id="menu" className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} max-md:fixed max-md:top-0 max-md:z-50 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-screen max-md:bg-white/25 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 text-sm ml-auto md:ml-8 lg:ml-16 xl:ml-24`}>
                            <a href="#" onClick={() => setMobileOpen(false)} className="text-zinc-800 hover:text-zinc-950">Home</a>
                            <a href="#features" onClick={() => setMobileOpen(false)} className="text-zinc-800 hover:text-zinc-950">Features</a>
                            <a href="#testimonials" onClick={() => setMobileOpen(false)} className="text-zinc-800 hover:text-zinc-950">Testimonial</a>
                            <a href="#contact" onClick={() => setMobileOpen(false)} className="text-zinc-800 hover:text-zinc-950">Contact</a>

                            <button id="close-menu" onClick={() => setMobileOpen(false)} className="md:hidden bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-md aspect-square font-medium transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className='hidden md:flex items-center gap-4 md:gap-6 text-sm'>
                            <Link to='/login?state=register' className='text-zinc-800 px-4 py-2.5 rounded-lg hover:bg-zinc-100 cursor-pointer'>Register</Link>
                            <Link to='/login?state=login' className="hidden md:flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2.5 rounded-lg text-sm transition cursor-pointer group">
                                Login
                                <svg className="transition-transform duration-200 group-hover:translate-x-1" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.495 5.651a.7.7 0 0 0 0-.99L9.04.207a.7.7 0 0 0-.99.99l3.96 3.96-3.96 3.959a.7.7 0 0 0 .99.99zM0 5.156v.7h13v-1.4H0z" fill="#fff" /></svg>
                            </Link>
                        </div>

                        <button id="open-menu" onClick={() => setMobileOpen(true)}
                            className="md:hidden bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-md aspect-square font-medium transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                            </svg>
                        </button>
                    </div>
                </nav>

                <div className="mt-32 px-6 py-3 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center gap-2">
                    <Sparkles size={18} className="text-violet-600" />
                    <p className="text-sm font-medium text-zinc-700">
                        Build professional resumes with AI in under 5 minutes
                    </p>
                </div>

                <h1 className="text-4xl md:text-6xl/18 font-medium text-center max-w-4xl mt-4 bg-clip-text leading-tight tracking-tighter px-4">
                    Land your dream job with AI powered resumes!
                </h1>
                <p className="text-sm md:text-base/6 text-zinc-600 bg-clip-text text-center max-w-lg mt-2 px-4">
                    Create edit and download professional resumes with AI powered assistance.
                </p>

                <button className="flex items-center gap-2 bg-black hover:bg-black/95 text-white text-sm px-6 py-3 mt-6 rounded-lg transition cursor-pointer group">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.18 2.344a.833.833 0 0 1 1.64 0l.875 4.632a1.67 1.67 0 0 0 1.328 1.328l4.632.876a.834.834 0 0 1 0 1.639l-4.632.875a1.67 1.67 0 0 0-1.328 1.329l-.876 4.631a.834.834 0 0 1-1.638 0l-.876-4.631a1.67 1.67 0 0 0-1.328-1.329l-4.632-.875a.833.833 0 0 1 0-1.639l4.632-.876a1.67 1.67 0 0 0 1.328-1.328zm7.487-.676v3.333m1.666-1.669H15M3.333 18.333a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>
                    <div className="relative overflow-hidden">
                        <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                            Get Started
                        </span>
                        <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                            Get Started
                        </span>
                    </div>
                </button>

                <div className='grid grid-cols-2 sm:grid-cols-3 items-center gap-8 sm:gap-16 mt-7 px-4'>
                    <div className='flex items-center gap-2'>
                        <div className="relative flex size-2.5 rounded-full items-center justify-center bg-indigo-600">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-700 opacity-75 animate-ping duration-300"></span>
                            <span className="relative inline-flex size-1.5 rounded-full bg-indigo-50"></span>
                        </div>
                        <p className="text-sm text-center text-zinc-600">No credit card</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className="relative flex size-2.5 rounded-full items-center justify-center bg-indigo-600">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-700 opacity-75 animate-ping duration-300"></span>
                            <span className="relative inline-flex size-1.5 rounded-full bg-indigo-50"></span>
                        </div>
                        <p className="text-sm text-center text-zinc-600">free to use</p>
                    </div>
                    <div className='flex items-center gap-2 col-span-2 sm:col-span-1 justify-center sm:justify-start'>
                        <div className="relative flex size-2.5 rounded-full items-center justify-center bg-indigo-600">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-700 opacity-75 animate-ping duration-300"></span>
                            <span className="relative inline-flex size-1.5 rounded-full bg-indigo-50"></span>
                        </div>
                        <p className="text-sm text-center text-zinc-600">get AI assistance</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Hero