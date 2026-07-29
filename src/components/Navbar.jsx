// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import react from 'react'




function Navbar() {

    return (
        <>
            <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <nav className="flex justify-center items-center gap-4 py-3 px-4 max-w-4xl mx-auto flex-wrap text-sm md:text-base font-medium">
                    <Link
                        to="/"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        Home
                    </Link>
                    <span className="text-gray-300 dark:text-gray-600">|</span>

                    <Link
                        to="/projects"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        Projects
                    </Link>
                    <span className="text-gray-300 dark:text-gray-600">|</span>

                    <Link
                        to="/experience"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        Experience & Skills
                    </Link>
                    <span className="text-gray-300 dark:text-gray-600">|</span>

                    <Link
                        to="/contact"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        Contact
                    </Link>
                </nav>
            </header>
        </>
    )
}

export default Navbar