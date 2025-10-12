"use client"
import React from 'react';
import Image from 'next/image';
// The main App component that renders only the Footer
const App: React.FC = () => {
  return (
    // A single container with the dark background for the footer
    <div id="contact" className="bg-[#04041E] font-sans overflow-x-hidden">
      <Footer />
    </div>
  );
}
export default App;

// The Footer component
const Footer: React.FC = () => {
  const navLinks = ['Home', 'About', 'Members', 'Contact'];
  
  return (
    <footer className="relative w-full h-[450px] flex items-center justify-center overflow-hidden mt-20">
      <div
        className="absolute top-0 w-[2353px] h-full"
        style={{
          background: 'linear-gradient(154.35deg, #04051B 25%, #2A2594 60%, #04051B 95%)',
          borderTopLeftRadius: '50%',
          borderTopRightRadius: '50%',
        }}
      ></div>
       {/* White border overlay */}
      <div
        className="absolute top-0 w-[2353px] h-full pointer-events-none"
        style={{
          borderTop: '1.5px solid rgba(255, 255, 255, 0.3)',
          borderTopLeftRadius: '50%',
          borderTopRightRadius: '50%',
        }}
      ></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-end h-full pb-10">
        <div className="w-full flex flex-col items-center gap-10">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Logo */}
                <Image src="/vertex-logo.png" alt="VERTEX Logo" className="h-8 w-auto" />

                {/* Nav Links */}
                <nav className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-y-4 gap-x-8 md:gap-x-14">
                    {navLinks.map((link) => (
                    <a key={link} href="#" className="font-semibold text-white text-xl hover:opacity-80 transition-opacity">
                        {link}
                    </a>
                    ))}
                </nav>
                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="#04051B"/></svg>
                  </a>
                  <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 6C21.78 6.3 21.04 6.5 20.28 6.6C21.08 6.1 21.68 5.3 21.98 4.4C21.24 4.9 20.44 5.2 19.6 5.4C18.9 4.7 17.94 4.2 16.86 4.2C14.84 4.2 13.22 5.8 13.22 7.8C13.22 8.1 13.24 8.4 13.3 8.7C9.28 8.5 5.72 6.6 3.18 3.8C2.86 4.3 2.68 5 2.68 5.6C2.68 6.9 3.36 8 4.4 8.6C3.78 8.6 3.18 8.4 2.64 8.1V8.2C2.64 10 4.02 11.5 5.74 11.8C5.44 11.9 5.12 12 4.78 12C4.54 12 4.3 11.9 4.08 11.9C4.56 13.4 6.02 14.5 7.74 14.5C6.38 15.6 4.68 16.2 2.84 16.2C2.54 16.2 2.26 16.2 2 16.1C3.78 17.3 5.86 18 8.08 18C16.84 18 20.48 10.9 20.48 4.8C20.48 4.6 20.48 4.4 20.46 4.2C21.3 3.6 22 2.8 22.46 1.9L22.46 6Z" fill="#04051B"/></svg>
                  </a>
                  <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689-.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" fill="#04051B"/></svg>
                  </a>
                  <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#04051B"/></svg>
                  </a>
                </div>
            </div>
            {/* Divider */}
            <hr className="w-full border-t border-white/50" />
            {/* Copyright */}
            <p className="text-white text-sm text-center tracking-wider">
              Made with ❤️ by Vertex
            </p>
        </div>
      </div>
    </footer>
  );
};



