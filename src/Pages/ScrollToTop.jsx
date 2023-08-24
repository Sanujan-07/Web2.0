import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [location]);

  return null; // This component doesn't render anything, it's just for the scroll effect
}

export default ScrollToTop;
