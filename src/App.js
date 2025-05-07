import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from './Components/Navbar';
import Testimonials from './Components/Testimonials';
import WhyChoose from './Components/WhyChoose';
import HowItWorks from './Components/HowItWorks';
import { motion } from 'motion/react';
import ChatBot from './Components/ChatBot';

function App() {
  const [form, setForm] = useState({ name: "", email: "", company: "", license: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((field) => field.trim() === "")) {
      alert("Please fill correctly, then submit.");
      return;
    }
    alert("Success! Your response has been submitted. ");
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className=''>
      {/* CHATBOT */}
      <ChatBot />

      {/* NAVBAR */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* HERO SECTION */}
      <div id='hero-section' className='bg-yellow-200 dark:bg-gray-900 text-center py-20 px-4 min-h-screen flex flex-col justify-center lg:-mt-16'>
        <motion.section
          id="hero-section"
          className="min-h-screen px-4 flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <header className="text-center py-20 px-10 flex flex-col mx-10 lg:mx-80 bg-white/50 dark:bg-black/20 rounded-lg shadow-lg shadow-yellow-300 dark:shadow-pink-800">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-purple-600 dark:text-pink-600">Turn Unused Software into Cash</h1>
            <p className="text-lg mb-6 mt-5 lg:mt-0 text-gray-800 dark:text-gray-100">We will help you to sell your software licenses that you don't need quickly, securely and also very very <span className='font-bold text-orange-500 dark:text-purple-800 text 2xl:'>EASILY</span>.</p>
            <a href="#contact-section"><button className="bg-white dark:bg-pink-600 rounded-lg text-orange-500 dark:text-purple-200 font-bold px-6 py-3 hover:bg-yellow-200 dark:hover:bg-pink-700 hover:underline hover:underline-offset-4 animate-bounce">Resell Your Licenses</button></a>
          </header>
        </motion.section>
      </div>

      {/* HOW IT WORKS SECTION */}
      <section id='how-section' className="bg-yellow-200 dark:bg-gray-900 py-16 px-20 max-w-screen mx-auto min-h-screen flex flex-col justify-center">
        <motion.section
          id="how-section"
          className="min-h-screen px-4 flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <HowItWorks />
        </motion.section>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section id='why-section' className="bg-yellow-200 dark:bg-gray-900 py-16 px-20 min-h-screen max-w-screen mx-auto flex flex-col justify-center">
        <motion.section
          id="why-section"
          className="min-h-screen px-4 flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <WhyChoose />
        </motion.section>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id='testimonials-section' className="py-16 bg-yellow-200 dark:bg-gray-900 px-4 text-center min-h-screen flex flex-col justify-center">
        <motion.section
          id="testimonials-section"
          className="min-h-screen px-4 flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-purple-600 dark:text-pink-600 text-center">Hear from out customers</h2>
          <div className="space-y-8 mx-auto mt-10">
            <Testimonials />
          </div>
        </motion.section>
      </section>

      {/* FORM SECTION */}
      <section id='contact-section' className="bg-yellow-200 dark:bg-gray-900 min-h-screen flex flex-col justify-center pb-10 lg:pb-0">
        <motion.section
          id="form-section"
          className="min-h-screen px-4 flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-purple-600 dark:text-pink-600 text-center">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="mx-10 lg:mx-auto rounded-lg space-y-4 mt-5 lg:mt-10 bg-white/50 dark:bg-black/20 px-10 py-10 lg:px-40 lg:py-20 shadow-lg shadow-yellow-300 dark:shadow-pink-800">
            <input type="text" name="name" placeholder="Your name..." required value={form.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg bg-yellow-200 dark:bg-purple-200 text-gray-900 placeholder:text-gray-500" />
            <input type="email" name="email" placeholder="Your email..." required value={form.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg bg-yellow-200 dark:bg-purple-200 text-gray-900 placeholder:text-gray-500" />
            <input type="text" name="company" placeholder="Company name..." required value={form.company} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg bg-yellow-200 dark:bg-purple-200 text-gray-900 placeholder:text-gray-500" />
            <select name="license" required value={form.license} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg bg-yellow-200 dark:bg-purple-200 text-gray-900 placeholder:text-gray-500">
              <option value="">Your license type</option>
              <option value="Microsoft">Type A</option>
              <option value="Adobe">Type B</option>
              <option value="Autodesk">Type C</option>
              <option value="Other">Other</option>
            </select>
            <textarea name="message" placeholder="Your message..." required value={form.message} onChange={handleChange} rows="4" className="w-full p-3 border border-gray-300 rounded-lg bg-yellow-200 dark:bg-purple-200 text-gray-900 placeholder:text-gray-500"></textarea>
            <button type="submit" className="bg-white dark:bg-pink-600 rounded-lg text-orange-500 dark:text-purple-200 font-bold px-6 py-3 hover:bg-yellow-200 dark:hover:bg-pink-700 hover:underline hover:underline-offset-4 float-end">Submit</button>
          </form>
        </motion.section>
      </section>

      <p className='text-white text-center text-sm bg-orange-400 dark:bg-purple-600'>made by <span className='underline font-semibold'>Vaibhav Mahawar</span></p>
    </div>
  );
}

export default App;
