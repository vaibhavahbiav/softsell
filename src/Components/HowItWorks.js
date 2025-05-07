import React from 'react'

const howItWorks = [
    { icon: "fas fa-upload", title: "Upload License", desc: "Enter youe software details." },
    { icon: "fas fa-calculator", title: "Get Valuation", desc: "We analyze and tell you a fair price." },
    { icon: "fas fa-money-bill-wave", title: "Get Paid", desc: "You get paid quickly, securely and easily." },
]

function HowItWorks() {
    return (
        <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-purple-600 dark:text-pink-600 text-center">How does it works?</h2>
            <div className="flex flex-col md:flex-row justify-around gap-5 text-center mt-5 lg:mt-20">
                {howItWorks.map((item, i) => (
                    <div key={i} className="flex flex-col items-center bg-white/50 dark:bg-black/20 px-5 py-10 lg:px-20 lg:py-10 rounded-lg shadow-lg shadow-yellow-300 dark:shadow-pink-900 text-gray-800">
                        <i className={`${item.icon} text-5xl text-orange-500 dark:text-pink-600`}></i>
                        <h3 className="text-xl font-semibold mt-5 lg:mt-10 text-gray-800 dark:text-gray-100">{item.title}</h3>
                        <p className='text-gray-800 dark:text-gray-100'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HowItWorks
