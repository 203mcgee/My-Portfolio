import React from "react";
// import { useTheme } from "../components/ThemeContext"; // Optional: keep if using your ThemeContext

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* 
        Responsive Grid: 
        - 1 column on mobile (grid-cols-1)
        - 3 columns on desktop (lg:grid-cols-3)
      */}
      {/* <div className="flex justify-end mb-6">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-lg font-medium border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
        >
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        {/* Card 1: Core Stack */}
        <section className="core-section border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-center mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
              My Core Stack
            </h2>
            <ul className="space-y-2 text-sm md:text-base leading-relaxed">
              <li>
                <strong className="text-blue-600 dark:text-blue-400">OS:</strong> Windows
              </li>
              <li>
                <strong className="text-blue-600 dark:text-blue-400">Database:</strong> MySQL
              </li>
              <li>
                <strong className="text-blue-600 dark:text-blue-400">Languages:</strong> C++, C, Python, JavaScript
              </li>
              <li>
                <strong className="text-blue-600 dark:text-blue-400">Frameworks:</strong> React.js, Node.js, Tailwind CSS
              </li>
            </ul>
          </div>
        </section>

        {/* Card 2: Developer Identity */}
        <section className="developer-identity-section border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-sm flex flex-col">
          <h2 className="text-xl font-bold text-center mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
            Developer Identity
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
            A motivated <span className="font-semibold text-gray-900 dark:text-white">Junior Web & Software Developer</span> focused on building responsive user interfaces, writing clean frontend logic, and working with modern full-stack web technologies.
          </p>
        </section>

        {/* Card 3: Metrics */}
        <section className="metrics-section border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-sm flex flex-col">
          <h2 className="text-xl font-bold text-center mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
            Key Metrics
          </h2>
          <div className="grid grid-cols-2 gap-3 text-center my-auto">
            <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <span className="block text-2xl font-extrabold text-blue-600 dark:text-blue-400">10+</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Projects Built</span>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <span className="block text-2xl font-extrabold text-blue-600 dark:text-blue-400">4+</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Languages</span>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <span className="block text-2xl font-extrabold text-blue-600 dark:text-blue-400">100%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Responsive UI</span>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <span className="block text-2xl font-extrabold text-blue-600 dark:text-blue-400">2026</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Capstone Year</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}