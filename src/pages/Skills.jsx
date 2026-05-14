import React from 'react'
import { motion } from 'framer-motion'
import MotionSection from '../components/motion/MotionSection'

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaJsSquare, 
  FaReact, 
  FaRocket 
} from 'react-icons/fa'
import { SiTailwindcss, SiJquery } from 'react-icons/si'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
    ]
  },
  {
    category: 'Styling',
    skills: [
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
    ]
  },
  {
    category: 'Languages & Tools',
    skills: [
      { name: 'ES6+', icon: <FaJsSquare /> },
      { name: 'jQuery', icon: <SiJquery /> },
      { name: 'Performance Opt.', icon: <FaRocket /> },
    ]
  }
]

const Skills = () => {
  return (
    <MotionSection parallax stagger={0.06} className="px-10 md:px-20 py-16">
      <motion.div className="max-w-4xl mb-12">

        <h2 className="text-4xl font-bold mb-4 glow-text uppercase tracking-widest">Technical Arsenal</h2>
        <p className="text-text-secondary text-lg">
          A collection of technologies I've mastered to build fast, responsive, and scalable web applications.
        </p>
      </motion.div>

      <div className="space-y-10">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
          >

            <h3 className="text-lg font-bold text-accent uppercase tracking-wider mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  whileHover={{ scale: 1.08, borderColor: 'var(--accent-primary)' }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-primary bg-bg-card/30 hover:bg-bg-card/50 transition-all group cursor-pointer"
                >

                  <span className="text-lg text-accent group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  )
}

export default Skills

