import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Heart } from '../../common/icons';

export default function HotBids() {
  const items = useSelector((state) => state.hotBids.bids);
  return (
    <div className="container mx-auto gap-y-5 mt-5">
      <span className="text-lg font-bold">Hot Bids</span>
      <div className="flex flex-wrap m-5 gap-5 justify-evenly   ">
        {items &&
          items.map((item, index) => {
            return (
              <Link
                key={index}
                className="flex flex-col border-solid border-2 border-gray-400 rounded-xl w-60 h-72 hover:bg-purple-200"
                to={`/bids/${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-56 h-60 rounded-xl self-center my-2"
                />
                <span className="font-bold w-56 mx-auto text-sm">
                  {item.name}
                </span>
                <div className="flex flex-row w-56 justify-between mx-auto text-sm">
                  <span className="">
                    <b>{item.price}</b> ETH
                  </span>
                  <span className="flex flex-row items-center gap-2">
                    <Heart />
                    <b>{item.fav}</b>
                  </span>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
