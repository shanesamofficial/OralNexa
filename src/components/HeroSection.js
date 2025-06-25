import React from "react";
import dentistImg from '../assets/man.webp';

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[100vh] md:min-h-screen bg-white overflow-hidden flex flex-col md:flex-row items-start justify-center px-4 md:px-12 py-6 md:py-12">
      {/* Background Gradient */}
      <div className="absolute w-[95%] md:w-[90%] max-w-[1273px] h-[60%] md:h-[70%] bg-gradient-to-l from-blue-950 to-blue-700 rounded-[30px] top-[8%] left-[2.5%] md:left-[5%] z-0" />

      {/* Image - hidden on mobile, shown on md+ */}
      <div className="z-10 hidden md:block md:absolute md:top-[20%] md:right-[5%]">
        <img
          src={dentistImg}
          alt="Dentist"
          className="w-[350px] md:w-[400px] h-auto object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="z-20 w-full max-w-md text-left mt-8 ml-4 md:ml-0 space-y-4 md:absolute md:left-[8%] md:top-[20%]">
        <div className="text-6xl md:text-6xl font-bold font-['Tw_Cen_MT'] leading-tight">
          <span className="text-blue-500">Oral</span>
          <span className="text-white">Nexa</span>
        </div>
        <div className="text-white text-3xl md:text-5xl font-normal font-['Inter'] leading-snug">
          Simplify Smiles,<br />
          <span className="font-bold">One Click at a Time</span>
        </div>
        <p className="text-white text-sm md:text-lg font-normal font-['Inter']">
          Built for dentists. Designed for simplicity.
          <br/>
          Powered by automation.
        </p>
        <button className="bg-blue-700 rounded-[10px] text-white px-5 py-2 text-sm md:text-xl">
          Sign In
        </button>
      </div>
    </div>
  );
}
