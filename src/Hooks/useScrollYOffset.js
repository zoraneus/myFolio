import {useState, useEffect} from 'react';

export const useScrollY = () => {
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    const setFromEvent = e => {setPosition(window.pageYOffset)};
    window.addEventListener('scroll', setFromEvent);
    return () => {window.removeEventListener('scroll', setFromEvent)}
  }, []);

  return (position);
}

export default useScrollY;