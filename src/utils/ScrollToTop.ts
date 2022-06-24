import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollElement = document.querySelector('.page-container');
    scrollElement?.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
