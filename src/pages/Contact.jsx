import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa'
import MotionSection from '../components/motion/MotionSection'


const Contact = () => {
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    const formData = new FormData(e.target)
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/yousseffiras444@gmail.com", {
        method: "POST",
        body: formData
      })
      
      if (response.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <MotionSection parallax stagger={0.07} className="px-10 md:px-20 py-16 flex-grow flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Contact Info */}
        <motion.div className="space-y-10">

          <div>
            <h2 className="text-4xl font-bold mb-4 glow-text uppercase tracking-widest">Connect With Me</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Have a project in mind or just want to say hi? My inbox is always open. 
              Let's build something extraordinary together.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-bg-card/40 border border-border-primary hover:border-accent/30 transition-all">
              <div className="text-2xl text-accent">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-secondary uppercase">Email</h4>
                <p className="text-lg font-medium">yousseffiras444@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-2xl bg-bg-card/40 border border-border-primary hover:border-accent/30 transition-all">
              <div className="text-2xl text-accent">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-secondary uppercase">Location</h4>
                <p className="text-lg font-medium">Cairo, Egypt / Remote</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-2xl bg-bg-card/40 border border-border-primary hover:border-accent/30 transition-all">
              <div className="text-2xl text-accent">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-secondary uppercase">Phone</h4>
                <p className="text-lg font-medium">+20 109 3211 284</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="p-8 md:p-10 rounded-3xl bg-bg-card/20 border border-border-primary shadow-2xl relative overflow-hidden"
        >

          {/* Subtle glow effect in corner */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 blur-[80px] rounded-full" />
          
          <form 
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Message from Portfolio!" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="space-y-2">
              <label className="text-sm font-bold text-accent/80 px-1 uppercase tracking-tighter">Full Name</label>
                <input 
                type="text" 
                name="name"
                required
                className="w-full px-5 py-4 rounded-xl bg-bg-primary/50 border border-border-primary focus:border-accent outline-none transition-colors text-text-primary"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-accent/80 px-1 uppercase tracking-tighter">Email Address</label>
                <input 
                type="email" 
                name="email"
                required
                className="w-full px-5 py-4 rounded-xl bg-bg-primary/50 border border-border-primary focus:border-accent outline-none transition-colors text-text-primary"
                placeholder="email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-accent/80 px-1 uppercase tracking-tighter">Message</label>
                <textarea 
                rows="4"
                name="message"
                required
                className="w-full px-5 py-4 rounded-xl bg-bg-primary/50 border border-border-primary focus:border-accent outline-none transition-colors text-text-primary resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-[0.98] ${
                status === 'success' 
                  ? 'bg-emerald-500 text-white cursor-default' 
                  : 'bg-accent text-white shadow-[0_0_20px_var(--accent-soft)] hover:shadow-[0_0_30px_var(--accent-primary)] disabled:opacity-70'
              }`}
            >
              {status === 'idle' && <>Send Signal <FaPaperPlane /></>}
              {status === 'submitting' && <>Transmitting...</>}
              {status === 'success' && <>Signal Received!</>}
              {status === 'error' && <>Transmission Failed. Try again?</>}
            </button>

            {status === 'success' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-emerald-400 text-sm font-bold uppercase tracking-widest mt-4"
              >
                Thank you! I'll get back to you shortly.
              </motion.p>
            )}

          </form>
        </motion.div>
      </div>
    </MotionSection>
  )
}

export default Contact

