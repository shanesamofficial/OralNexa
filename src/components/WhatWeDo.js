import React from 'react';

export default function WhatWeDo() {
  const services = [
    {
      title: 'Smart Appointment Scheduling',
      desc: 'Say goodbye to manual booking! Our intelligent scheduling system allows patients to book appointments online, while you manage your calendar with drag-and-drop ease.',
      img: 'https://placehold.co/405x400?text=Smart+Scheduling',
    },
    {
      title: 'Patient Record Management',
      desc: 'Access complete patient profiles with medical history, previous treatments, prescriptions, and diagnostic files – anytime, anywhere.',
      img: 'https://placehold.co/405x400?text=Patient+Records',
    },
    {
      title: 'Real-Time Analytics & Reports',
      desc: 'Gain valuable insights into your clinic\'s operations with real-time dashboards. Monitor patient inflow, revenue trends, and more.',
      img: 'https://placehold.co/405x400?text=Analytics',
    },
    {
      title: 'Seamless Patient Communication',
      desc: 'Send appointment reminders, follow-ups, and health tips via SMS, email, or app notifications – all from a single dashboard.',
      img: 'https://placehold.co/405x400?text=Communication',
    },
    {
      title: 'Simplified Billing & Payment Integration',
      desc: 'Create detailed invoices, track payments, and accept multiple payment modes with our transparent billing system.',
      img: 'https://placehold.co/405x400?text=Billing',
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-12 bg-white space-y-12" id="services">
      <div className="text-blue-700 text-lg sm:text-xl md:text-2xl font-bold font-['Inter'] pl-4 md:pl-16">WHAT WE PROVIDE</div>

      {services.map((s, i) => (
        <div
          key={s.title}
          className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-6 md:gap-12 bg-zinc-400/20 rounded-3xl p-6 md:p-8 max-w-6xl mx-auto`}
        >
          <div className="md:w-1/2 text-left">
            <h3 className="text-blue-950 text-xl md:text-3xl font-bold font-league mb-3">
              {s.title}
            </h3>
            <p className="text-black text-sm md:text-lg font-light font-league">
              {s.desc}
            </p>
          </div>
          <img className="w-64 md:w-72 h-auto rounded-2xl object-cover" src={s.img} alt={s.title} />
        </div>
      ))}
    </section>
  );
}
