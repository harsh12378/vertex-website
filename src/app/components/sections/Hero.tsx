"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  const boxes: undefined[] = Array.from({ length: 7 });

  const getClipPath = (index: number): string => {
    if (index < 3) return "polygon(0 0, 100% 0, 100% 100%, 0 95%)";
    if (index === 3) return "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    return "polygon(0 0, 100% 0, 100% 95%, 0 100%)";
  };

  const getHeight = (index: number): string => {
    switch (index) {
      case 0:
      case 6:
        return "h-[645.9px]";
      case 1:
      case 5:
        return "h-[605px]";
      case 2:
      case 4:
        return "h-[565px]";
      case 3:
        return "h-[525px]";
      default:
        return "h-[500px]";
    }
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#0c001f]">
      {/* Blurry Background */}
      <div
        className="absolute inset-0 z-[1] scale-[0.8] blur-[200px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(97, 0, 233, 0.7) 0%, #04041E 60%)",
        }}
      />

      {/* Decorative Boxes */}
      <div className="absolute inset-0 flex items-center justify-center gap-[50px] z-0">
        {boxes.map((_, index) => (
          <div
            key={index}
            className={`w-[204.4px] ${getHeight(index)} flex-none rounded-[18.17px]`}
            style={{
              clipPath: getClipPath(index),
              background:
                "linear-gradient(180deg, rgba(81,81,81,0) 0%, rgba(81,81,81,0.2) 100%)",
              backdropFilter: "blur(6.8px)",
              transform: "scaleX(-1)",
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-[2] w-full h-full flex flex-col items-center justify-between py-[5vh] px-4">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center flex-grow">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/7e34222ea5fa931db58533504e9e05915ee151a0?width=2085"
            alt="VERTEX"
            width={1043}
            height={300}
            className="w-full max-w-[1043px] mb-12 drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]"
          />
          <p className="text-[#D6D5D5] text-[1.5rem] font-bold text-center font-[Urbanist] max-w-[42rem] mt-4">
            The Official Student Club of Department of Electronics and
            Telecommunication
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-12"> {/* Added mt-12 to shift down */}
          <button className="px-6 py-3 rounded-full text-white text-lg font-semibold font-[Urbanist] bg-[#04041E] border border-white/20 transition-all hover:scale-105">
            Explore Events
          </button>
          <button className="px-6 py-3 rounded-full text-white text-lg font-semibold font-[Urbanist] bg-gradient-to-r from-[#04041E] to-[rgba(97,0,233,0.7)] transition-all hover:scale-105">
            Join Club
          </button>
        </div>
      </div>
    </main>
  );
}
