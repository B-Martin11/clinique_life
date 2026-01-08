import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RemonterEnHaut = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // animation douce
    });
  }, [pathname]);

  return null;
};

export default RemonterEnHaut;
