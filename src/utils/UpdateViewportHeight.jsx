import { useEffect } from 'react';

const UpdateViewportHeight = () => {
  useEffect(() => {
    // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh(); // Set the initial value

    // We listen to the resize event to update the value when the viewport size changes
    window.addEventListener('resize', setVh);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return null;
};

export default UpdateViewportHeight;
