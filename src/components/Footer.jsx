import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaUpwork } from 'react-icons/fa6';
import { SiFreelancer ,SiFiverr } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="px-10 md:px-20 py-10 bg-bg-card/30 border-t border-accent/10 flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <p className="text-text-secondary text-sm font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} Youssef Firas. Built with precision.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://www.upwork.com/freelancers/~01fc3f8cb162fd3dd1" target='_blank' className="social-icon text-base w-8 h-8"><FaUpwork /></a>
        <a href="https://www.freelancer.com/u/yousseffiras" target='_blank' className="social-icon text-base w-8 h-8"><SiFreelancer /></a>
        <a href="https://www.fiverr.com/youssefkd1/" target='_blank' className="social-icon text-base w-8 h-8"><SiFiverr /></a>
        <a href="https://github.com/youssefkd1" target='_blank' className="social-icon text-base w-8 h-8"><FaGithub /></a>
      </div>
    </footer>
  )
}

export default Footer