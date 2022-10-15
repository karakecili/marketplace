import { useState, useLayoutEffect } from 'react';

const debounce = (fn, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(fn, delay, [...args]);
  };
};

const useDebounced = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    function update() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    const debounceSize = debounce(update, 500);
    window.addEventListener('resize', debounceSize);

    return () => window.addEventListener('resize', debounceSize);
  }, []);

  return size;
};

export default useDebounced;
