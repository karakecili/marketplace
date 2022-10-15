import React from 'react';

const Image = (props) => {
  return <img className="m-6 rounded-xl" src={props.image} alt={props.alt} />;
};

export default Image;
