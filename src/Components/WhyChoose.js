import React from 'react'

const whyChooseReasons = [
    { icon: "fas fa-shield-alt", title: "Secure Process", desc: "Very very secure." },
    { icon: "fas fa-clock", title: "Fast Turnaround", desc: "Insanely fast." },
    { icon: "fas fa-dollar-sign", title: "Top Market Prices", desc: "Fairest Prices." },
    { icon: "fas fa-user-friends", title: "Trusted by Businesses", desc: "Used by best companies." },
]

function WhyChoose() {
    return (
        <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-purple-600 dark:text-pink-600 text-center">Why Choose SoftSell?</h2>
            <div className="flex flex-col md:flex-row justify-around gap-5 text-center mt-5 lg:mt-20">
                {whyChooseReasons.map((item, i) => (
                    <div key={i} className="flex flex-col items-center bg-white/50 dark:bg-black/20 px-5 py-10 lg:px-20 lg:py-10 rounded-lg shadow-lg shadow-yellow-300 dark:shadow-pink-800 text-gray-800">
                        <i className={`${item.icon} text-5xl text-orange-500 dark:text-pink-600`}></i>
                        <h4 className="font-semibold mt-5 text-gray-800 dark:text-gray-100">{item.title}</h4>
                        <p className=" text-gray-800 dark:text-gray-100">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChoose
