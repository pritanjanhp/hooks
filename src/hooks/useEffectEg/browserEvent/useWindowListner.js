import { useEffect } from "react";

const useWindowListner = (eventType, handleMove) => {
  useEffect(() => {
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [eventType, handleMove]);
};

export default useWindowListner;
