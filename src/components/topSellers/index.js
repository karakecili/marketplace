import React from 'react';
import { useSelector } from 'react-redux';

export default function TopSellers() {
  const items = useSelector((state) => state.topSeller.sellers);
  return (
    <div className="container mx-auto gap-y-5 mt-5">
      <span className="text-lg font-bold">Top Sellers</span>
      <div className="flex flex-wrap m-5 gap-5 justify-evenly   ">
        {items &&
          items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col border-solid border-2 border-gray-400 rounded-xl w-44 h-52 hover:bg-pink-200"
              >
                <div className="bg-[#DA18A3] rounded-full w-8 h-8 flex items-center justify-center text-white m-3">
                  {index + 1}
                </div>
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-20 h-20 rounded-full self-center mb-2"
                />
                <span className="text-center">{item.name}</span>
                <span className="text-center">
                  <b>{item.price}</b> ETH
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
