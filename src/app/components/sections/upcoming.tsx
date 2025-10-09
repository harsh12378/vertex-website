'use client'

import { Calendar, Users, Code } from 'lucide-react'

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'NavUtsav 2025',
      description: 'Annual cultural and technical festival celebrating innovation and creativity',
      icon: Calendar,
      iconBg: 'from-orange-500 to-red-500',
      cardBg: 'from-orange-950/30 to-red-950/20',
      borderColor: 'border-orange-500/30',
      date: 'February 2025',
    },
    {
      id: 2,
      title: 'Recruitment 2025',
      description: 'Join the Vertex family! Open positions for passionate tech enthusiasts',
      icon: Users,
      iconBg: 'from-purple-500 to-pink-500',
      cardBg: 'from-purple-950/30 to-pink-950/20',
      borderColor: 'border-purple-500/30',
      date: 'January 2025',
    },
    {
      id: 3,
      title: 'Hackathon 2025',
      description: '24-hour coding marathon to build innovative solutions and win exciting prizes',
      icon: Code,
      iconBg: 'from-cyan-500 to-blue-500',
      cardBg: 'from-cyan-950/30 to-blue-950/20',
      borderColor: 'border-cyan-500/30',
      date: 'November 2025',
    },
  ]

  return (
    <section
      id="events"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: '#04041e' }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(123,49,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,49,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Gradient Orb */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Join us in our exciting upcoming events and activities
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`group relative p-6 rounded-2xl border ${event.borderColor} bg-gradient-to-br ${event.cardBg} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-up`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${event.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <event.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {event.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {event.description}
              </p>

              {/* Date Badge */}
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>

              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            View More
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
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

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}