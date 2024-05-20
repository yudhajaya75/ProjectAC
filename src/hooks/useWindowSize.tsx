import { useEffect, useState } from "react";

function useWindowSize(isDebug?: boolean) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    isDebug &&
      console.log("WINDOW SIZE: ", windowSize.width, windowSize.height);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return windowSize;
}

export default useWindowSize;
