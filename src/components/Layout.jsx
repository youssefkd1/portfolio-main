import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-transparent">
      {/* Main Glass Container */}
      <div className="glass-container w-full max-w-7xl min-h-[85vh] flex flex-col relative z-10">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout