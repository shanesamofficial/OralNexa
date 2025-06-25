import React from 'react';

export default function Introduction() {
  return (
    <section className="w-full px-4 py-12 flex flex-col items-center bg-white" id="about">
      <div className="w-full max-w-6xl bg-gradient-to-l from-blue-950 to-blue-700 rounded-3xl p-6 md:p-12 flex flex-col gap-8 text-white">
        <div className="text-4xl md:text-6xl font-bold font-['Tw_Cen_MT']">
          <span className="text-blue-500">Oral</span><span>Nexa</span>
        </div>
        <div className="text-2xl md:text-5xl font-['Inter'] leading-tight">
          Smart Tools for<br /><span className="font-bold">Smarter Dental Clinics</span>
        </div>
        <button className="w-full sm:w-auto px-6 py-3 bg-blue-700 rounded-xl text-white text-xl font-medium font-['League_Spartan']">
          Contact Us
        </button>
      </div>
      <div className="mt-10 text-center text-black text-xl md:text-3xl font-medium font-['League_Spartan']">
        Built for Dentists. Loved by Clinics.
      </div>
    </section>
  );
}
