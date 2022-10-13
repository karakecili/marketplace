import React, { useRef } from 'react';
import { IconSearch } from '../../../../common/icons';

export default function SearchBar() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <div
      className="flex flex-row border-2 border-gray-400 rounded-xl p-2 gap-2 mr-auto"
      onClick={handleClick}
    >
      <IconSearch />
      <input
        className="focus:outline-none"
        placeholder="Search Item Here"
        ref={ref}
      />
    </div>
  );
}
