// src/components/AppointmentForm.js
import React from 'react';

export default function AppointmentForm() {
  return (
    <form className="space-y-3">
      <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
      <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
      <input type="tel" placeholder="Phone Number" className="w-full border p-2 rounded" />
      <select className="w-full border p-2 rounded">
        <option>Select Service</option>
        <option>Cleaning</option>
        <option>Filling</option>
        <option>Consultation</option>
      </select>
      <input type="date" className="w-full border p-2 rounded" />
      <button type="submit" className="w-full bg-emerald-500 text-white p-2 rounded hover:bg-emerald-600">Book Now</button>
    </form>
  );
}
