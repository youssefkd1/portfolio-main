import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './theme/ThemeContext'
import Layout from './components/Layout'
import InteractiveBackground from './components/InteractiveBackground'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

const App = () => {
  return (
    <ThemeProvider>
      <InteractiveBackground />
      <CustomCursor />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App