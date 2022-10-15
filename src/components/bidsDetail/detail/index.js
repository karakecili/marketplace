import React from 'react';
import { Heart } from '../../../common/icons';

const Detail = (props) => {
  return (
    <div className="flex flex-col gap-5 m-5">
      <span className="text-3xl font-bold">{props.name} </span>
      <span className="flex flex-row items-center gap-2 text-lg">
        <Heart />
        <b>{props.fav}</b>
      </span>
      <span className="">Creator: {props.creator} </span>
      <div className="flex flex-col">
        <span>Details: </span>
        <span>{props.details} </span>
      </div>
      <div className="flex gap-2">
        <button className="px-7 py-2 rounded-lg text-white bg-gradient-to-r from-[#EB1484] via-[#C91CC3] to-[#C81CC5] hover:font-bold">
          Buy for 4.5 ETH
        </button>
        <button className="px-7 py-2 rounded-lg text-[#DA18A3] border-2 border-[#DA18A3] hover:font-bold">
          Make Offer
        </button>
      </div>
    </div>
  );
};

export default Detail;
