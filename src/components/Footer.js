import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 px-6 md:px-16 py-12 text-white font-['Tw_Cen_MT']">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Brand */}
        <div className="text-3xl md:text-5xl font-bold">
          <span className="text-blue-500">Oral</span><span className="text-white">Nexa</span>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 text-xl">
          <span className="font-bold">Navigation</span>
          <span>Services</span>
          <span>Contact</span>
          <span>Pricing</span>
          <span>About</span>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <div className="w-48 h-12 bg-blue-700/10 rounded-full outline outline-1 outline-white" />
          <div className="text-lg">+91 98765 43210</div>
        </div>
      </div>
    </footer>
  );
}
