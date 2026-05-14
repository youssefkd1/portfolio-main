import React, { useCallback, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import aiResumeVideo from '../assets/ai-resume-analyzer.mp4'
import studyPlannerVideo from '../assets/study-planner.mp4'
import moviesVideo from '../assets/movies-app.mp4'
import coffeeVideo from '../assets/coffee-app.mp4'
import bookishVideo from '../assets/bookish.mp4'
import foodVideo from '../assets/food-app.mp4'
import solarVideo from '../assets/solar-system.mp4'
import aiChatVideo from '../assets/ai-chat.mp4'
import imageBgRemoverVideo from '../assets/image-backgoud-remover.mp4'

const projects = [
  {
    title: 'AI Resume Analyzer',
    description: 'An AI-powered resume analyzer that helps you improve your resume.',
    tech: ['React', 'Puter', 'Tailwind'],
    link: 'https://resume-analyzer-pi-coral.vercel.app/',
    video: aiResumeVideo,
  },
  {
    title: 'Study Planner',
    description: 'An study planner that helps you plan your studies with pomodoro timer.',
    tech: ['React', 'React-Router', 'Tailwind'],
    link: 'https://study-planner-joe.vercel.app/',
    video: studyPlannerVideo,
  },
  {
    title: 'Movie App',
    description: 'A movie app using themoviedb which shows trending and popular movies.',
    tech: ['React', 'themoviedb api', 'Tailwind'],
    link: 'https://movie-app-joe.vercel.app/',
    video: moviesVideo,
  },
  {
    title: 'Coffee Website',
    description: 'A simple coffee website with smooth animations and modern design.',
    tech: ['html', 'css', 'javascript'],
    link: 'https://cofeta.vercel.app/',
    video: coffeeVideo,
  },
  {
    title: 'Bookish Website',
    description: 'A simple online bookstore that has a premium look and smooth animations.',
    tech: ['html', 'css', 'javascript'],
    link: 'https://bookish-joe.vercel.app/',
    video: bookishVideo,
  },
  {
    title: 'Food Website',
    description: 'A simple online food website for food lovers and it has modern design.',
    tech: ['html', 'css', 'javascript'],
    link: 'https://foodie-joe.vercel.app/',
    video: foodVideo,
  },
  {
    title: '3D Solar System',
    description: 'A 3D solar system with right calculations of each planet.',
    tech: ['react', 'three.js', 'react-three-fiber', 'tailwind'],
    link: 'https://solar-system-joe.vercel.app/',
    video: solarVideo,
  },
  {
    title: 'AI Chat App',
    description: 'A simple AI chat app that can talk with you using puter.js like chatgpt .',
    tech: ['react', 'puter', 'tailwind'],
    link: 'https://ai-chat-app-joe.vercel.app/',
    video: aiChatVideo,
  },
  {
    title: 'Image Background Remover',
    description: 'A simple image background remover using puter.js fast relieble experience.',
    tech: ['react', 'puter', 'tailwind'],
    link: 'https://image-bgremover.vercel.app/',
    video: imageBgRemoverVideo,
  },
]

function PreviewCursor({ x, y, playing }) {
  return (
    <div
      className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
      style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
    >
      <div className="-translate-x-1 -translate-y-1">
        <div
          className={`project-cursor-ripple absolute left-2 top-2 h-11 w-11 rounded-full border border-[var(--accent-primary)]/55 bg-[var(--accent-primary)]/10 ${playing ? 'opacity-40' : ''}`}
          aria-hidden
        />
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          className={`relative drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] transition-transform duration-200 ${playing ? 'scale-95' : 'project-cursor-nudge'}`}
          aria-hidden
        >
          <path
            d="M10.5 7.5L10.5 24.2L14.8 20.4L18.6 28.5L21.2 27.1L17.4 19L24.5 19L10.5 7.5Z"
            fill="var(--text-primary)"
            stroke="var(--bg-primary)"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 12.5L12.5 20.5L15.5 18.2L19 24.5L19.8 24L16.3 17.5L21.5 17.5L12.5 12.5Z"
            fill="var(--accent-primary)"
            className="opacity-90"
          />
        </svg>
        {!playing ? (
          <span className="absolute left-5 top-7 whitespace-nowrap rounded-md border border-[var(--accent-primary)]/40 bg-[var(--bg-primary)]/95 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--accent-primary)] shadow-lg backdrop-blur-sm">
            Move here — plays
          </span>
        ) : (
          <span className="absolute left-5 top-7 whitespace-nowrap rounded-md border border-[var(--accent-primary)]/25 bg-[var(--accent-primary)]/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--text-primary)] shadow-md backdrop-blur-sm">
            Preview
          </span>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const videoRef = useRef(null)
  const mediaRef = useRef(null)
  const [mediaCursor, setMediaCursor] = useState(null)
  const [cardHovered, setCardHovered] = useState(false)
  const reduceMotion = useReducedMotion()

  const playPreview = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    el.play().catch(() => {})
  }, [])

  const stopPreview = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    el.pause()
    el.currentTime = 0
  }, [])

  const onMediaMove = useCallback((e) => {
    if (reduceMotion) return
    const rect = mediaRef.current?.getBoundingClientRect()
    if (!rect) return
    setMediaCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [reduceMotion])

  const clearMediaCursor = useCallback(() => {
    setMediaCursor(null)
  }, [])

  const handleCardEnter = useCallback(() => {
    setCardHovered(true)
    playPreview()
  }, [playPreview])

  const handleCardLeave = useCallback(() => {
    setCardHovered(false)
    stopPreview()
    clearMediaCursor()
  }, [stopPreview, clearMediaCursor])

  const onMediaEnter = useCallback(
    (e) => {
      setCardHovered(true)
      playPreview()
      if (reduceMotion) return
      const rect = mediaRef.current?.getBoundingClientRect()
      if (!rect) return
      setMediaCursor({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    },
    [reduceMotion, playPreview],
  )

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, type: 'spring', stiffness: 260, damping: 26 }}
      whileHover={{ y: -6 }}
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
      onFocus={handleCardEnter}
      onBlur={handleCardLeave}
      className="group glow-card flex flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-lg no-underline outline-none ring-accent/0 transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div
        ref={mediaRef}
        className={`project-media-zone relative aspect-video w-full shrink-0 overflow-hidden bg-slate-950/80 ${reduceMotion ? 'cursor-pointer' : 'cursor-none'}`}
        onMouseEnter={onMediaEnter}
        onMouseMove={onMediaMove}
        onMouseLeave={clearMediaCursor}
      >
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-75 transition-[opacity,transform] duration-500 group-hover:scale-100 group-hover:opacity-100"
          aria-hidden
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/90 via-[var(--bg-primary)]/25 to-transparent transition-opacity duration-300 group-hover:opacity-40"
        />
        {!reduceMotion && mediaCursor && (
          <PreviewCursor x={mediaCursor.x} y={mediaCursor.y} playing={cardHovered} />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center p-3 transition-opacity duration-300 group-hover:opacity-0">
          <p className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)] shadow-sm backdrop-blur-sm">
            Your <span className="text-[var(--accent-primary)]">cursor</span> on the clip — hold to watch
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-primary)] md:text-2xl">
          {project.title}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded px-2 py-1 text-[10px] font-bold uppercase tracking-tighter text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 md:text-xs"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-primary)] opacity-90 transition-all group-hover:gap-2 group-hover:opacity-100">
          Open live site
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </motion.a>
  )
}

const Projects = () => {
  return (
    <div className="px-10 py-16 md:px-20">
      <h2 className="glow-text mb-10 text-4xl font-bold uppercase tracking-widest">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects
