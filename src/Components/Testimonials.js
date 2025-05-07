import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

const testimonials = [
    {
        quote: "Made it easier an efficient to resell the products we don't longer need.",
        name: "Mr. A., CEO, Big Company.",
    },
    {
        quote: "Had a great experience with SoftSell reselling our softwares.",
        name: "Mrs. B., CFO, IT Giant",
    },
    {
        quote: "Very fast and secure service. If you are looking to resell your softwares, there is nothing better than this.",
        name: "Mr. C., Manager, Entertainment Masters",
    },
    {
        quote: "An awesome portal and awesome value for your second hand software licences.",
        name: "Ms. D., Head, Gaming Leader",
    },
];

function Testimonials() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

    return (
        <div>
            <div className="text-center bg-white/50 dark:bg-black/20 rounded-lg py-8 px-10 shadow-lg shadow-yellow-300 dark:shadow-pink-800 w-[80vw]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="italic text-lg"
                    >
                        <blockquote className='transition-opacity duration-500 italic text-lg w-full text-gray-800 dark:text-gray-100'>
                            “{testimonials[index].quote}”
                            <footer className="mt-2 text-sm font-bold text-orange-500 dark:text-purple-800">— {testimonials[index].name}</footer>
                        </blockquote>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
                <button onClick={prev} className="text-yellow-300 dark:text-pink-600 bg-white dark:bg-gray-900 rounded-full size-14 hover:text-orange-400 dark:hover:text-pink-700 text-4xl shadow-lg shadow-yellow-300 dark:shadow-pink-800">
                    ←
                </button>
                <button onClick={next} className="text-yellow-300 dark:text-pink-600 bg-white dark:bg-gray-900 rounded-full size-14 hover:text-orange-400 dark:hover:text-pink-700 text-4xl shadow-lg shadow-yellow-300 dark:shadow-pink-800">
                    →
                </button>
            </div>
        </div>
    );
}

export default Testimonials

