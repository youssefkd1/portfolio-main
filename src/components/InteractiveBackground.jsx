import React, { useEffect, useRef, memo } from 'react';
import { useTheme, accentColors } from '../theme/ThemeContext';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const { accentColor } = useTheme();
  const hexColor = accentColors[accentColor] || '#00d2ff';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const particleCount = 100;
    const connectionDistance = 200;
    const mouse = { x: null, y: null, radius: 180 };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!result) return '0, 210, 255';
      return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
    };

    class Particle {
      constructor() {
        this.init();
      }

      init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;
            
            this.x -= directionX * force * 5;
            this.y -= directionY * force * 5;
          }
        }
      }

      draw() {
        // Outer glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 12);
        gradient.addColorStop(0, `rgba(${hexToRgb(hexColor)}, 0.25)`); // Reduced from 0.4
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 12, 0, Math.PI * 2);
        ctx.fill();

        // Core (No ShadowBlur for performance)
        ctx.fillStyle = hexColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add Big Ambient Glow at mouse position (Interactive Flare)
      if (mouse.x !== null && mouse.y !== null) {
        const ambientGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius * 3.5);
        ambientGlow.addColorStop(0, `rgba(${hexToRgb(hexColor)}, 0.15)`); 
        ambientGlow.addColorStop(0.3, `rgba(${hexToRgb(hexColor)}, 0.06)`); 
        ambientGlow.addColorStop(0.7, `rgba(${hexToRgb(hexColor)}, 0.01)`); 
        ambientGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = ambientGlow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            
            // Pulse effect
            const pulse = Math.sin(Date.now() / 1000 + i) * 0.1 + 0.9;
            
            // Check proximity to mouse to boost connection brightness
            let mouseBoost = 0;
            if (mouse.x !== null && mouse.y !== null) {
              const mdx1 = mouse.x - particles[i].x;
              const mdy1 = mouse.y - particles[i].y;
              const mdist1 = Math.sqrt(mdx1 * mdx1 + mdy1 * mdy1);
              
              const mdx2 = mouse.x - particles[j].x;
              const mdy2 = mouse.y - particles[j].y;
              const mdist2 = Math.sqrt(mdx2 * mdx2 + mdy2 * mdy2);
              
              if (mdist1 < mouse.radius || mdist2 < mouse.radius) {
                mouseBoost = 0.4; // Slightly stronger boost
              }
            }

            // Optimized Line Glow (Double Stroke instead of ShadowBlur)
            const baseOpacity = opacity * (0.12 + mouseBoost) * pulse; // Reduced from 0.2+mouseBoost
            
            // 1. Outer Glow Stroke
            ctx.strokeStyle = `rgba(${hexToRgb(hexColor)}, ${baseOpacity * 0.4})`;
            ctx.lineWidth = opacity * 4; // Thick glow
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            // 2. Inner Core Stroke
            ctx.strokeStyle = `rgba(${hexToRgb(hexColor)}, ${baseOpacity})`;
            ctx.lineWidth = opacity * 1.5; // Thin core
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hexColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
      style={{ background: '#020617' }}
    />
  );
};

export default memo(InteractiveBackground);
