import {useState, useEffect} from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const setFromEvent = e => {setWidth(window.innerWidth)};
    window.addEventListener('resize', setFromEvent);
    return (() => {window.removeEventListener('scroll', setFromEvent)});
  })

  return (width);
}

export default useWindowWidth;