'use client'

import { useState } from 'react'
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { Mic, CircuitBoard,  ArrowRight, Code ,MoveRight} from 'lucide-react'
type EventType = {
  id: number;
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

// New event data with corrected icon
const eventsData = [
  {
    id: 1,
    Icon: Mic,
    title: 'MicDrop',
    description: 'Open mic night for poetry, music, and stand-up',
  },
  {
    id: 2,
    Icon: CircuitBoard,
    title: 'Circuit Rush',
    description: 'Hardware hackathon / circuit design challenge',
  },
  {
    id: 3,
    Icon: Code,
    title: 'Vertex Velocity',
    description: 'Mini sports fest (track, tug-of-war, football, etc.)',
  },
  {
    id: 4,
    Icon: Code, // Corrected icon from placeholder
    title: 'CodeClash',
    description: 'A competitive programming contest for all skill levels.',
  },
]

// Animation variants for the cards
const cardVariants = {
  // ... 'enter' and 'center' variants remain the same
  enter: ([offset, direction]: [number, number]) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.8,
  }),
  center: ([offset, direction]: [number, number]) => ({
    x: '0%',
    y: offset === 0 ? 0 : 20,
    scale: offset === 0 ? 1 : 0.9,
    rotate: offset === 0 ? -5 : 5,
    zIndex: eventsData.length - Math.abs(offset),
    opacity: 1,
  }),

  // FIX IS HERE: Changed to accept a single number
  exit: (direction: number) => ({ 
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    zIndex: 0,
  }),
};


export default function Events() {
  const [events, setEvents] = useState(eventsData);
  const [[activeIndex, direction], setActive] = useState([0, 0]); // Store index and direction

  // Safety check for empty events array
  if (!events || events.length === 0) {
    return (
      <section id="events" className="flex justify-center items-center min-h-screen" style={{ backgroundColor: '#04041e' }}>
        <h2 className="text-2xl text-gray-400">No upcoming events.</h2>
      </section>
    );
  }

  // Function to handle changing the active card
  const changeCard = (newDirection: number) => {
    setActive(prev => {
      let newIndex = prev[0] + newDirection;
      if (newIndex < 0) newIndex = events.length - 1;
      else if (newIndex >= events.length) newIndex = 0;
      return [newIndex, newDirection];
    });
  };

  const prevIndex = (activeIndex - 1 + events.length) % events.length;
  const nextIndex = (activeIndex + 1) % events.length;

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
  const swipe = info.offset.x;
  if (swipe > 50) changeCard(-1);
  else if (swipe < -50) changeCard(1);
};

  return (
    <section
      id="events"
      className="relative flex flex-col justify-center items-center min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: '#04041e' }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(123,49,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,49,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12 md:mb-16">
         <div className="text-center mb-12 md:mb-16">
  <h2 
    className="text-3xl md:text-4xl font-bold text-yellow-200 mb-4" 
    style={{ textShadow: '0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1)' }}
  >
    Upcoming Events
  </h2>
</div>
        </div>

        <div className="w-full flex justify-center items-center h-[450px] md:h-[400px]">
          <div className="hidden lg:flex w-1/4">
            <SideCard event={events[prevIndex]} />
          </div>

          <div className="relative w-full lg:w-1/2 h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              {events.map((event, index) => {
                const offset = index - activeIndex;
                if (Math.abs(offset) > 1) return null;

                const isFrontCard = offset === 0;

                return (
                  <motion.div
                    key={event.id}
                    className={`absolute w-[85%] max-w-[320px] h-[380px] rounded-2xl flex flex-col justify-between p-6 shadow-2xl ${
                      isFrontCard ? 'bg-[#2b1c5a] cursor-grab active:cursor-grabbing' : 'bg-gray-200'
                    }`}
                    // Use variants for cleaner animations
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    // Pass offset and direction to variants
                    custom={[offset, direction]}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    drag={isFrontCard ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                  >
                    {isFrontCard ? <FrontCardContent event={event} onNext={() => changeCard(1)} /> : <BackCardContent />}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="hidden lg:flex w-1/4">
            <SideCard event={events[nextIndex]} />
          </div>
        </div>

      <div className="flex justify-center mt-12 md:mt-16">
  <button className="group inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-1000 to-purple-800 border border-white/20 transition-all duration-300 hover:from-purple-900 hover:to-purple-700 hover:scale-105 hover:border-white/40">
    <span>View More</span>
    <MoveRight 
      className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" 
    />
  </button>
</div>
      </div>
    </section>
  )
}

// Sub-components remain the same...
const SideCard: React.FC<{ event: EventType }> = ({ event }) => (
  <div className="w-full h-[320px] border-2 border-dashed border-white/20 rounded-2xl p-6 flex flex-col text-center items-center justify-center">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
        <event.Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
  </div>
);

const FrontCardContent: React.FC<{ event: EventType; onNext: () => void }> = ({ event, onNext }) => (
  <>
    <div>
      <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center mb-4">
        <event.Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-3xl font-bold text-white">{event.title}</h3>
    </div>
    <div className="flex justify-between items-end">
        <p className="text-gray-300 text-sm w-3/4">{event.description}</p>
        <button 
          onClick={onNext}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <ArrowRight size={24} />
        </button>
    </div>
  </>
);

const BackCardContent = () => <div />;