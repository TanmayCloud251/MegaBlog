import React from 'react'
import {Link} from "react-router-dom"
import Logo from "./Logo.jsx"

function Footer() {
  return (
    <section className="relative overflow-hidden py-12 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-slate-400">
                                    &copy; {new Date().getFullYear()} MegaBlog. Built by <a href="https://github.com/TanmayCloud251" target="_blank" rel="noreferrer" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Tanmay Mishra</a>
                                </p>
                                <p className="mt-2 text-sm text-gray-400 dark:text-slate-500 italic">
                                    "Code is poetry."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-400 dark:text-slate-500">
                                Connect
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a
                                        className="text-base font-medium text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        href="mailto:tanmaycloud251@gmail.com"
                                    >
                                        Email
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className="text-base font-medium text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        href="https://github.com/TanmayCloud251"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className="text-base font-medium text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        href="https://www.linkedin.com/in/tanmaymi251"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className="text-base font-medium text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        href="https://www.instagram.com/tanmaymishra251"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-400 dark:text-slate-500">
                                Other Projects
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a
                                        className="text-base font-medium text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        href="https://video-tube-frontend-sepia.vercel.app"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        VideoTube
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className="text-base font-medium text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        href="https://rescan.netlify.app"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Rescan
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-400 dark:text-slate-500">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer
