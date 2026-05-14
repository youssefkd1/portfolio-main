import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Ahmed Hassan',
    role: 'Project Manager at TechStart',
    content: 'Youssef delivered exceptional work on our web platform. His attention to detail and performance optimization made a real difference in our user experience.',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5
  },
  {
    name: 'Sara Mohamed',
    role: 'CEO at DigitalHub',
    content: 'Professional, responsive, and incredibly talented. Youssef transformed our vision into a beautiful, functional reality. Highly recommended!',
    image: 'https://i.pravatar.cc/150?img=2',
    rating: 5
  },
  {
    name: 'Omar Karim',
    role: 'Founder at WebSolutions',
    content: 'Working with Youssef was seamless. His React expertise and modern development practices elevated our entire project. Outstanding results.',
    image: 'https://i.pravatar.cc/150?img=3',
    rating: 5
  },
  {
    name: 'Layla Ibrahim',
    role: 'Design Lead at Creative Agency',
    content: 'Youssef perfectly translated our designs into pixel-perfect implementations. His communication and technical skills are top-notch.',
    image: 'https://i.pravatar.cc/150?img=4',
    rating: 5
  },
  {
    name: 'Karim Rashid',
    role: 'CTO at StartupXyz',
    content: 'Best developer we\'ve worked with. Clean code, fast delivery, and always willing to go the extra mile. Impressed with every project.',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5
  },
  {
    name: 'Fatima Zaki',
    role: 'Product Owner at InnovateTech',
    content: 'Youssef\'s attention to performance and user experience is remarkable. He turned our complex requirements into an elegant solution.',
    image: 'https://i.pravatar.cc/150?img=6',
    rating: 5
  },
]

const Testimonials = () => {
  return (
    <div className="px-10 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 glow-text uppercase tracking-widest">Client Stories</h2>
        <p className="text-text-secondary text-lg">
          Real feedback from amazing clients and collaborators. See what they have to say about working together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="glow-card p-6 rounded-2xl"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} className="text-accent text-sm" />
              ))}
            </div>

            {/* Content */}
            <p className="text-text-secondary mb-6 leading-relaxed italic">
              "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-border-primary">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border border-accent/30"
              />
              <div>
                <h4 className="font-bold text-text-primary">{testimonial.name}</h4>
                <p className="text-xs text-text-secondary uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 pt-16 border-t border-border-primary"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="text-5xl font-black text-accent mb-2">100%</div>
            <p className="text-text-secondary">Client Satisfaction</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="text-5xl font-black text-accent mb-2">50+</div>
            <p className="text-text-secondary">Projects Delivered</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="text-5xl font-black text-accent mb-2">2+</div>
            <p className="text-text-secondary">Years Experience</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Testimonials
