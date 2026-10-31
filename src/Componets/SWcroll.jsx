import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Page scroll karega top par jab bhi route change hoga
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
