'use client'

import { useState, useEffect, } from 'react'
import Link from 'next/link';


export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToEvents = () => {
    const element = document.getElementById('events')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#04041e' }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(123,49,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(123,49,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-purple-500/20 rotate-45 animate-float" />
      <div className="absolute top-40 right-16 w-16 h-16 border border-cyan-500/20 rounded-full animate-float-delayed" />
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-pink-500/20 animate-float-slow" />
      <div className="absolute top-1/2 right-32 w-12 h-12 border border-purple-500/30 rotate-12 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-cyan-500/10 rounded-full animate-pulse-slow" />

      {/* Gradient Orbs */}
      <div
        className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.8s ease-out',
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[120px]"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.8s ease-out',
        }}
      />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[140px] animate-pulse-slow" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* VERTEX Logo  */}
        <div className="mb-8 animate-fade-in">
          <svg
            viewBox="0 0 1200 300"
            className="w-full h-auto mx-auto"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(56, 189, 248, 0.5))',
              maxWidth: '95vw',
            }}
          >
            <defs>
              <linearGradient id="vertexGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="52%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="none"
              stroke="url(#vertexGradient)"
              strokeWidth="3"
              fontSize="180"
              fontWeight="bold"
              letterSpacing="15"
              fontFamily="system-ui, -apple-system, sans-serif"
              className="vertex-text"
            >
              VERTEX
            </text>
            
            {/* Enhanced Geometric pattern overlay */}
            <g opacity="0.7">
              {/* V patterns - scaled and repositioned */}
              <polygon points="140,90 155,120 170,90" fill="none" stroke="url(#vertexGradient)" strokeWidth="2" />
              <line x1="147" y1="105" x2="163" y2="105" stroke="url(#vertexGradient)" strokeWidth="2" />
              <circle cx="155" cy="100" r="3" fill="url(#vertexGradient)" />
              
              {/* E rectangles */}
              <rect x="280" y="95" width="40" height="10" fill="none" stroke="url(#vertexGradient)" strokeWidth="2" />
              <rect x="290" y="120" width="30" height="10" fill="none" stroke="url(#vertexGradient)" strokeWidth="2" />
              <line x1="285" y1="100" x2="285" y2="125" stroke="url(#vertexGradient)" strokeWidth="2" />
              
              {/* R patterns */}
              <polygon points="430,85 450,100 430,115" fill="none" stroke="url(#vertexGradient)" strokeWidth="2" />
              <line x1="440" y1="95" x2="440" y2="110" stroke="url(#vertexGradient)" strokeWidth="2" />
              <circle cx="440" cy="102" r="4" fill="url(#vertexGradient)" />
              
              {/* T cross pattern */}
              <line x1="580" y1="80" x2="580" y2="130" stroke="url(#vertexGradient)" strokeWidth="2.5" />
              <line x1="560" y1="95" x2="600" y2="95" stroke="url(#vertexGradient)" strokeWidth="2.5" />
              <circle cx="580" cy="105" r="3" fill="url(#vertexGradient)" />
              
              {/* E rectangles (second E) */}
              <rect x="720" y="100" width="35" height="8" fill="none" stroke="url(#vertexGradient)" strokeWidth="2" />
              <rect x="730" y="122" width="25" height="8" fill="none" stroke="url(#vertexGradient)" strokeWidth="2" />
              
              {/* X cross with enhancements */}
              <line x1="900" y1="85" x2="935" y2="125" stroke="url(#vertexGradient)" strokeWidth="2.5" />
              <line x1="935" y1="85" x2="900" y2="125" stroke="url(#vertexGradient)" strokeWidth="2.5" />
              <circle cx="917.5" cy="105" r="4" fill="url(#vertexGradient)" />
              <circle cx="908" cy="95" r="2" fill="url(#vertexGradient)" opacity="0.6" />
              <circle cx="927" cy="115" r="2" fill="url(#vertexGradient)" opacity="0.6" />
            </g>
          </svg>
        </div>

        {/* Subtitle - Narrower Container */}
        <div className="mb-16 animate-fade-in-delay max-w-2xl mx-auto">
          <p className="text-gray-200 text-lg md:text-xl mb-2 font-light">
            The Official Student Club of Department
          </p>
          <p className="text-gray-300 text-base md:text-lg font-light">
            of Electronics and Telecommunication
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
          <button
            onClick={scrollToEvents}
            className="px-8 py-3.5 rounded-full border border-purple-400/50 bg-transparent text-white font-medium hover:bg-purple-900/30 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm"
          >
            Explore Events
          </button>
          
          <button  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 text-white font-medium hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
           <Link href="/recruitment">
           Join Us
           </Link>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-20px) rotate(45deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1s;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .vertex-text {
          paint-order: stroke fill;
        }

        @media (min-width: 1024px) {
          .vertex-text {
            font-size: 200px;
          }
        }

        @media (min-width: 1536px) {
          .vertex-text {
            font-size: 220px;
          }
        }
      `}</style>
    </section>
  )
}