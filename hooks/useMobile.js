import React, { useEffect, useCallback, useState } from "react";

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() =>
    setIsMobile(window.matchMedia("(max-width: 1280px)").matches)
  );

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isMobile;
}
