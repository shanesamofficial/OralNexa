import React from 'react';

const materialIconsLink = "https://fonts.googleapis.com/icon?family=Material+Icons";

export default function Header() {
  return (
    <>
      <link href={materialIconsLink} rel="stylesheet" />
      <header className="relative w-[1273px] h-32 bg-white rounded-2xl top-[-24px] left-[120px]">
        {/* Logo */}
        <div className="absolute left-[149px] top-[50px] flex items-center space-x-1">
          <span className="text-blue-700 text-4xl font-bold font-['Tw_Cen_MT']">Oral</span>
          <span className="text-black/80 text-4xl font-bold font-['Tw_Cen_MT']">Nexa</span>
        </div>

        {/* Nav Links */}
        <div className="absolute left-[451px] top-[57px] text-black text-3xl font-normal font-['Tw_Cen_MT']">Services</div>
        <div className="absolute left-[611px] top-[57px] text-black text-3xl font-normal font-['Tw_Cen_MT']">Pricing</div>
        <div className="absolute left-[758px] top-[57px] text-black text-3xl font-normal font-['Tw_Cen_MT']">About</div>
        <div className="absolute left-[894px] top-[57px] text-black text-3xl font-normal font-['Tw_Cen_MT']">Contact</div>
        <div className="absolute left-[1170px] top-[57px] text-black text-3xl font-normal font-['Tw_Cen_MT']">Sign In</div>

        {/* Register Button */}
        <div className="absolute w-28 h-8 left-[1266px] top-[53px] bg-blue-700 rounded-[10px]"></div>
        <div className="absolute left-[1282px] top-[57px] text-white text-2xl font-bold font-['Tw_Cen_MT']">Register</div>
      </header>
    </>
  );
}
