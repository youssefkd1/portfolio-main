import React from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const sectionVariants = {
  hidden: {},
  show: {},
}


/**
 * MotionSection
 * - Stagger-ready parent (staggerChildren)
 * - Subtle parallax based on scroll
 * - Smooth reveal (opacity/y)
 */
const MotionSection = ({
  children,
  className = '',
  as: Component = motion.div,
  stagger = 0.06,
  parallax = true,
  style = {},
}) => {
  const reduceMotion = useReducedMotion()

  // Parallax: very subtle translateY to avoid nausea
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [parallax ? 10 : 0, parallax ? -10 : 0])

  return (
    <Component
      className={className}
      initial={reduceMotion ? 'show' : 'hidden'}
      animate="show"
      variants={{
        hidden: {},
        show: {},
      }}
      transition={{
        staggerChildren: reduceMotion ? 0 : stagger,
        delayChildren: reduceMotion ? 0 : 0.05,
      }}
      style={{
        ...style,
        ...(parallax && !reduceMotion ? { y } : null),
      }}
    >
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child

        // Wrap every direct child to guarantee reveal + staggering.
        return (
          <motion.div
            key={child.key ?? idx}
            variants={itemVariants}
            initial="hidden"
            animate={reduceMotion ? 'show' : undefined}
            whileInView={reduceMotion ? 'show' : 'show'}
            viewport={{ once: true, margin: '-10% 0px' }}
            style={{ willChange: 'transform, opacity' }}
          >
            {child}
          </motion.div>
        )
      })}
    </Component>
  )
}

export default MotionSection


