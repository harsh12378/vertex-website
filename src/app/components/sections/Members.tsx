'use client'

import { ArrowUpRight } from 'lucide-react'

export default function Founders() {
  const founders = [
    {
      id: 1,
      name: 'Pranjal',
      role: 'Overall Lead',
      image: '/founders/pranjal.jpg', //example
    },
    {
      id: 2,
      name: 'Darshil',
      role: 'Technical Lead',
      image: '/founders/darshil.jpg',
    },
    {
      id: 3,
      name: 'xyz',
      role: 'Media Lead',
      image: '/founders/amogh.jpg',
    },
    {
      id: 4,
      name: 'xyz',
      role: 'Events Lead',
      image: '/founders/aryan.jpg',
    },
    {
      id: 5,
      name: 'xyz',
      role: 'Design Lead',
      image: '/founders/sneha.jpg',
    },
  ]

  return (
    <section
      id="members"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: '#04041e' }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(123,49,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,49,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Right Gradient Line */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Title */}
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Meet the
              <br />
              Founders
            </h2>
          </div>

          {/* Right: Description */}
          <div className="flex items-center animate-fade-in-delay">
            <p className="text-gray-300 text-lg leading-relaxed">
              A team of passionate visionaries united by creativity, leadership, and a shared mission to shape a vibrant, inclusive community at Vertex.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto overflow-y-hidden pb-6 scrollbar-custom">
            <div className="flex gap-6 min-w-max px-2">
              {founders.map((founder, index) => (
                <div
                  key={founder.id}
                  className="group relative w-80 h-96 rounded-3xl bg-gradient-to-br from-gray-400 to-gray-300 overflow-hidden flex-shrink-0 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-400">
                   
                    <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold opacity-20">
                      {founder.name[0]}
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Content at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-1">
                        {founder.name}
                      </h3>
                      <p className="text-purple-400 text-sm font-medium">
                        {founder.role}
                      </p>
                    </div>

                    {/* Arrow Button */}
                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </button>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-500/50 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="flex justify-center mt-8 gap-2">
            {founders.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-purple-500/30"
              />
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

        /* Custom Scrollbar */
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(71, 85, 105, 0.1);
          border-radius: 10px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #a855f7, #ec4899);
          border-radius: 10px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #9333ea, #db2777);
        }

        /* Firefox */
        .scrollbar-custom {
          scrollbar-width: thin;
          scrollbar-color: #a855f7 rgba(71, 85, 105, 0.1);
        }
      `}</style>
    </section>
  )
}