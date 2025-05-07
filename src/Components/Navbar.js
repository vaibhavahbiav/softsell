import React from 'react'

function Navbar({darkMode, toggleTheme}) {
    return (
        <nav className="sticky top-5 z-[99] bg-white/80 dark:bg-black/20 shadow-lg shadow-yellow-300 dark:shadow-pink-800 rounded-lg mx-auto max-w-[40vw] hidden lg:block">
            <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center space-x-5">
                <a href="*">
                    <img src='/favicon.ico' alt='SoftSell Logo' />
                </a>
                <div className="space-x-6">
                    <a href="#hero-section" className="text-gray-800 dark:text-gray-100 hover:text-purple-800 hover:underline hover:underline-offset-4">Home</a>
                    <a href="#how-section" className="text-gray-800 dark:text-gray-100 hover:text-purple-800 hover:underline hover:underline-offset-4">How It Works</a>
                    <a href="#why-section" className="text-gray-800 dark:text-gray-100 hover:text-purple-800 hover:underline hover:underline-offset-4">Why Us</a>
                    <a href="#testimonials-section" className="text-gray-800 dark:text-gray-100 hover:text-purple-800 hover:underline hover:underline-offset-4">Testimonials</a>
                    <a href="#contact-section" className="text-gray-800 dark:text-gray-100 hover:text-purple-800 hover:underline hover:underline-offset-4">Contact</a>
                    {/* DARK/LIGHT */}
                    <button
                        onClick={toggleTheme}
                        className="ml-4 text-gray-800 dark:text-gray-100 hover:text-purple-800"
                        title="Toggle dark mode"
                    >
                        {darkMode ? "🌞" : "🌙"}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
