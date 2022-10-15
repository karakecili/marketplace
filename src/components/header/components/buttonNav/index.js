import React from 'react';

export default function ButtonNav() {
  return (
    <div className="hidden md:flex gap-2">
      <button className="px-7 py-2 rounded-lg text-white bg-gradient-to-r from-[#EB1484] via-[#C91CC3] to-[#C81CC5] hover:font-bold">
        Create
      </button>
      <button className="px-7 py-2 rounded-lg text-[#DA18A3] border-2 border-[#DA18A3] hover:font-bold">
        Connect
      </button>
    </div>
  );
}
