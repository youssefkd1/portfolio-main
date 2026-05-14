import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme, accentColors } from '../theme/ThemeContext'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { accentColor, toggleAccent } = useTheme()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-10 py-6 md:py-8 relative z-[100]">
      <Link to="/" className="text-2xl md:text-3xl font-black tracking-tighter z-50">
        Youssef <span className="text-accent">Firas</span>
      </Link>

      {/* Desktop Links & Accent Picker */}
      <div className="hidden lg:flex items-center gap-10">
        <div className="flex items-center gap-8 border-r border-white/10 pr-8 mr-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'text-accent font-bold' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Accent Picker */}
        <div className="flex items-center gap-4 bg-[var(--nav-bg)] backdrop-blur-md p-2 rounded-full border border-[var(--border-color)] shadow-inner">
          <div className="flex items-center gap-2">
            {Object.entries(accentColors).map(([name, hex]) => (
              <button
                key={name}
                onClick={() => toggleAccent(name)}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                  accentColor === name ? 'ring-2 ring-[var(--text-primary)] ring-offset-2 ring-offset-[var(--bg-primary)] scale-110' : 'opacity-60'
                }`}
                style={{ backgroundColor: hex }}
                title={name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Toggle */}
      <button 
        onClick={toggleMenu}
        className="lg:hidden text-3xl text-accent z-50 transition-transform active:scale-90"
      >
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-3xl font-black uppercase tracking-widest transition-colors ${
                    isActive ? 'text-accent' : 'text-white/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Mobile Accent Picker */}
            <div className="mt-8 flex flex-col items-center gap-6 bg-[var(--card-bg)] p-6 rounded-3xl border border-[var(--border-color)]">
              <div className="flex items-center gap-4">
                {Object.entries(accentColors).map(([name, hex]) => (
                  <button
                    key={name}
                    onClick={() => toggleAccent(name)}
                    className={`w-8 h-8 rounded-full transition-all duration-300 ${
                      accentColor === name ? 'ring-4 ring-[var(--text-primary)] ring-offset-4 ring-offset-[var(--bg-primary)] scale-110' : 'opacity-40'
                    }`}
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative accent element */}
            <div className="absolute bottom-10 w-20 h-1 bg-accent rounded-full shadow-[0_0_20px_var(--accent-soft)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar