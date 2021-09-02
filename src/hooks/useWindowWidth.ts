import { useState, useEffect } from "react";

type WindowWidth = {
  width: number | undefined;
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<WindowWidth>({
    width: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
};
export default useWindowWidth;
