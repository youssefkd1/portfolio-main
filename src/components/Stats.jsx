import React from 'react'

const Stats = () => {
  const stats = [
    { value: '2+', label: 'Years of Experience' },
    { value: '10+', label: 'Technical Skills' },
    { value: '50+', label: 'Projects Completed' },
  ]

  return (
    <div className="flex flex-wrap justify-between items-center px-10 md:px-20 py-12 gap-10 bg-bg-card/20 border-t border-accent/10">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-4">
          <span className="text-4xl md:text-5xl font-black text-accent">
            {stat.value}
          </span>
          <span className="text-text-secondary text-sm font-bold uppercase tracking-wider max-w-[100px] leading-tight">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Stats
