'use client'

import { Instagram, Linkedin, Mail, Twitter, Facebook, Github } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/vertex',
      color: 'from-pink-500 to-purple-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/vertex',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/vertex',
      color: 'from-sky-400 to-blue-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/vertex',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/vertex',
      color: 'from-gray-600 to-gray-800',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@vertex.com',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#members' },
    { name: 'Blog', href: '#blog' },
  ]

  return (
    <footer
      id="contact"
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: '#04041e' }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(123,49,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,49,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left: Vertex Branding */}
          <div className="lg:col-span-1 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                VERTEX
              </span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              The official student club of Department of Electronics and Telecommunication
            </p>
            <p className="text-gray-500 text-sm">
              Empowering students through creativity, collaboration, and community.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div className="lg:col-span-1 animate-fade-in-delay">
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-base flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Us */}
          <div className="lg:col-span-1 animate-fade-in-delay-2">
            <h3 className="text-white text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-base">contact@vertex.com</p>
                  <p className="text-gray-500 text-sm">Get in touch with us</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-gray-400 text-base">ETE Department</p>
                  <p className="text-gray-500 text-sm">Your College Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 border border-purple-500/30 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center md:text-right animate-fade-in-up">
            <p>© 2025 Vertex. All rights reserved.</p>
            <p className="mt-1">
              Made with{' '}
              <span className="text-red-500">❤️</span>
              {' '}by Vertex Team
            </p>
          </div>
        </div>

        {/* Message Us Button (Floating) */}
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-slow">
          <a
            href="mailto:contact@vertex.com"
            className="group flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline">Message Us</span>
          </a>
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}