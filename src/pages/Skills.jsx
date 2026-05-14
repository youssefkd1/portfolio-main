import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaJsSquare, 
  FaReact, 
  FaRocket 
} from 'react-icons/fa'
import { SiTailwindcss, SiJquery } from 'react-icons/si'

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, level: '95%' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: '90%' },
  { name: 'Bootstrap', icon: <FaBootstrap />, level: '85%' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: '95%' },
  { name: 'JavaScript', icon: <FaJsSquare />, level: '90%' },
  { name: 'ES6+', icon: <FaJsSquare />, level: '88%' },
  { name: 'jQuery', icon: <SiJquery />, level: '80%' },
  { name: 'React', icon: <FaReact />, level: '92%' },
  { name: 'Performance Opt.', icon: <FaRocket />, level: '85%' },
]

const Skills = () => {
  return (
    <div className="px-10 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl font-bold mb-4 glow-text uppercase tracking-widest">Technical Arsenal</h2>
        <p className="text-text-secondary text-lg mb-12">
          A collection of technologies I've mastered to build fast, responsive, and scalable web applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, borderColor: 'var(--accent-primary)' }}
            className="p-6 rounded-2xl bg-bg-card/20 border border-border-primary flex flex-col gap-4 group transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="text-4xl text-accent group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="text-xs font-bold text-accent/60 uppercase tracking-tighter">
                Proficiency
              </span>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent">{skill.name}</h3>
              <div className="w-full h-1.5 bg-bg-card rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full bg-accent shadow-[0_0_10px_var(--accent-soft)]"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
