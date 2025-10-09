'use client'

import { Settings, Palette, Zap, Lightbulb, Handshake, ArrowRight } from 'lucide-react'

export default function About() {
  const features = [
    {
      id: 1,
      title: 'Tech in Action',
      description: 'Hands-on workshops, hackathons, and real-world engineering experiences that bring ideas to life.',
      icon: Settings,
      size: 'large',
    },
    {
      id: 2,
      title: 'Culture & Creativity',
      description: 'Open mics, fests, and artistic events where students express, explore, and connect beyond the classroom.',
      icon: Palette,
      size: 'large',
    },
    {
      id: 3,
      title: 'Sports & Spirit',
      description: 'Fun-filled games to fitness challenges — build friendships, teamwork, and unforgettable memories.',
      icon: Zap,
      size: 'small',
    },
    {
      id: 4,
      title: 'Skill Building',
      description: 'Opportunities to lead, plan, speak, and solve — shaping both your resume and your confidence.',
      icon: Lightbulb,
      size: 'small',
    },
    {
      id: 5,
      title: 'Networking',
      description: 'Meet peers, mentors, and collaborators who challenge and support your journey.',
      icon: Handshake,
      size: 'small',
    },
  ]

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: '#04041e' }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(123,49,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,49,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />



      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* About Header */}
        <div className="mb-12 animate-fade-in">
          <p className="text-yellow-400 text-sm font-semibold mb-4 tracking-wider uppercase">
            ABOUT VERTEX
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering students through creativity,
            <br />
            collaboration, and community.
          </h2>
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl">
            <p>
              In a world where learning goes beyond classrooms, Vertex stands as a dynamic student-led club under the Department of ETE. It is a space where innovation meets expression — bringing students together through technical excellence, cultural vibrance, and social impact.
            </p>
            <p>
              Driven by curiosity and passion, Vertex encourages students to step up, lead, create, and connect — shaping a well-rounded college experience rooted in teamwork, exploration, and growth.
            </p>
          </div>
        </div>

        {/* Why Join Us */}
        <div className="mt-20 animate-fade-in-delay">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Why join us?
            </span>
          </h3>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Large Cards (Top Row) */}
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={feature.id}
                className="group relative p-8 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Arrow Button */}
                <button className="w-10 h-10 rounded-full bg-white hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>
              </div>
            ))}

            {/* Small Cards (Bottom Row) */}
            {features.slice(2).map((feature, index) => (
              <div
                key={feature.id}
                className="group relative p-8 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-slate-900/50 to-purple-950/30 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-yellow-400" />
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Arrow Button */}
                <button className="w-10 h-10 rounded-full bg-white hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>
              </div>
            ))}
          </div>
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

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}