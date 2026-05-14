import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa'
import { useTheme } from '../theme/ThemeContext'

const About = () => {
  const { currentImage } = useTheme();
  return (
    <div className="px-6 md:px-20 py-16 flex flex-col gap-20">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-widest">
            Digital Identity / 01
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Architecting the <span className="text-accent">Future</span> of Web.
          </h2>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              I am a results-driven Software Engineer with a passion for building 
              high-performance digital ecosystems. My approach combines aesthetic 
              finesse with rigorous technical architecture.
            </p>
            <p>
              With deep expertise in the modern Javascript stack, I specialize in 
              turning complex requirements into seamless, lightning-fast user 
              experiences. Every line of code I write is optimized for scalability 
              and maintainability.
            </p>
          </div>
          
          <div className="flex gap-10 py-4 border-y border-white/5">
            <div>
              <h4 className="text-accent font-black text-2xl">50+</h4>
              <p className="text-xs text-text-secondary uppercase font-bold">Deployments</p>
            </div>
            <div>
              <h4 className="text-accent font-black text-2xl">99%</h4>
              <p className="text-xs text-text-secondary uppercase font-bold">Code Quality</p>
            </div>
            <div>
              <h4 className="text-accent font-black text-2xl">24/7</h4>
              <p className="text-xs text-text-secondary uppercase font-bold">Innovation</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:w-[400px] relative group"
        >
          {/* Tech frame overlay */}
          <div className="absolute -inset-4 border border-accent/20 rounded-3xl group-hover:border-accent/40 transition-all duration-500" />
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent rounded-bl-3xl" />
          
          <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl bg-bg-card">
            <img 
              src={currentImage} 
              alt="Youssef Firas" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Scanning line animation */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent h-1/2 w-full animate-[bounce_3s_infinite] pointer-events-none opacity-50" />
          </div>
        </motion.div>
      </div>

      {/* Philosophy Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaCode />,
            title: "Clean Protocol",
            desc: "Writing semantic, performant, and self-documenting code that stands the test of time."
          },
          {
            icon: <FaLightbulb />,
            title: "Problem Solver",
            desc: "Approaching every challenge with a solution-oriented mindset and data-driven logic."
          },
          {
            icon: <FaRocket />,
            title: "Rapid Scale",
            desc: "Leveraging modern frameworks to build applications that grow seamlessly with your user base."
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-3xl cursor-pointer bg-bg-card/20 border border-border-primary hover:border-accent/20 transition-all group"
          >
            <div className="text-3xl text-accent mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-text-secondary leading-relaxed text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Signature CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center py-10"
      >
        <p className="text-text-secondary italic text-lg max-w-2xl mx-auto">
          "The best code is not the one that works, but the one that empowers 
          others to build upon it."
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="w-10 h-[1px] bg-accent/30" />
          <span className="font-bold tracking-[0.5em] uppercase text-sm text-accent">
            Youssef Firas
          </span>
          <div className="w-10 h-[1px] bg-accent/30" />
        </div>
      </motion.div>
    </div>
  )
}

export default About