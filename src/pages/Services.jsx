import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCode, FaCloud, FaMobileAlt, FaSearch, FaShieldAlt } from 'react-icons/fa' 
import { PiSpeedometerFill } from 'react-icons/pi'

const services = [
  {
    title: "Web Development",
    description: "Building high-performance, scalable web applications using React, Next.js, and modern tech stacks.",
    icon: <FaCode />,
  },
  {
    title: "Performance Optimization",
    description: "Optimize websites to improve performance, user experience, and search engine rankings",
    icon: <PiSpeedometerFill />,
  }, 
  {
    title: "SEO Strategy",
    description: "Boosting your visibility and search engine rankings with data-driven optimization.",
    icon: <FaSearch />,
  }
]

const Services = () => {
  return (
    <div className="px-10 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 glow-text uppercase tracking-widest">Solutions & Services</h2>
        <p className="text-text-secondary text-lg leading-relaxed">
          I offer a wide range of specialized services to help startups and enterprises 
          scale their digital presence with cutting-edge technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ delay: index * 0.1 }}
            className="p-10 rounded-3xl cursor-pointer glow-card group relative"
          >
            
            <div className="text-4xl text-accent mb-8 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
            <p className="text-text-secondary leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-24 p-12 rounded-[2.5rem] bg-accent/5 border border-accent/10 text-center"
      >
        <h3 className="text-3xl font-bold mb-6">Need a custom solution?</h3>
        <p className="text-text-secondary max-w-2xl mx-auto mb-10">
          If you have a unique challenge that doesn't fit into these categories, 
          I'm always open to discussing custom development and design projects.
        </p>
        <Link to="/contact" className="btn-hire">
          Start a Conversation
        </Link>
      </motion.div>
    </div>
  )
}

export default Services