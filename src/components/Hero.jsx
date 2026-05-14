import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { FaUpwork } from 'react-icons/fa6';
import { SiFreelancer, SiFiverr } from "react-icons/si";
import { motion } from 'framer-motion'
import { useTheme } from '../theme/ThemeContext'
const Hero = () => {
  const { accentColor, currentImage, hueRotateDeg } = useTheme();


  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-10 md:px-20 py-10 gap-16 flex-grow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 max-w-2xl"
      >

        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">

          Hi, I'm <span className="glow-text">Youssef Firas</span>
        </h2>
        <h3 className="text-2xl md:text-4xl font-extrabold text-accent mb-6 uppercase tracking-[0.2em]">
          Frontend Developer Crafting Modern Web Experiences
        </h3>
        <p className="text-text-secondary text-lg mb-10 leading-relaxed max-w-lg">
          I craft high-performance digital experiences with a focus on modern web technologies. 
          Expertise in React, Tailwind, and full-stack development.
        </p>
        
        <div className="flex flex-wrap items-center gap-6">
          <Link to="/contact" className="btn-hire">
            Hire me
          </Link>
          <Link to="/projects" className="px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 border-accent text-accent hover:bg-accent hover:text-black">
            View Projects
          </Link>
          
          <div className="flex items-center gap-4">
            <a href="https://www.upwork.com/freelancers/~01fc3f8cb162fd3dd1" target='_blank' className="social-icon"><FaUpwork /></a>
            <a href="https://www.freelancer.com/u/yousseffiras" target='_blank' className="social-icon"><SiFreelancer /></a>
            <a href="https://www.fiverr.com/youssefkd1/" target='_blank' className="social-icon"><SiFiverr /></a>
            <a href="https://github.com/youssefkd1" target='_blank' className="social-icon"><FaGithub /></a>
            
          </div>
        </div>
      </motion.div>

      <motion.div className="flex-1 flex justify-center lg:justify-end relative">

        <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
          {/* Animated glow rings */}
          <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-[ping_3s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border-2 border-accent/20 animate-[ping_2s_linear_infinite]" />
          
          <div className="w-full h-full rounded-full border-4 border-accent bg-bg-card shadow-[0_0_40px_var(--accent-soft)] overflow-hidden relative z-10">
            <img 
              src={currentImage} 
              alt="youssef firas" 
              loading='lazy'
              fetchPriority='high'
              className="w-full h-full object-cover"
              style={{
                filter: `hue-rotate(${hueRotateDeg}deg)`,
                transition: 'filter 500ms ease',
              }}
            />

          </div>
        </div>
      </motion.div>
    </div>
  )
}


export default Hero

