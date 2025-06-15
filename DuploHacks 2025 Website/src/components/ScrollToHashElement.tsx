import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#',''));

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, [location])

  return null;
};

export default ScrollToHashElement