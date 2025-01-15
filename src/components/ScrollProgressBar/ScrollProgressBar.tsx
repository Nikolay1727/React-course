import { useEffect, useState } from "react";

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const callback = () => {
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress(Math.round((window.scrollY / height) * 100));
    };

    document.addEventListener("scroll", callback);

    return () => {
      document.removeEventListener("scroll", callback);
    };
  }, []);

  return (
    <div style={{position: "fixed", width: "100%"}}>
      <div
        style={{
          width: `${scrollProgress}%`,
          height: "9px",
          backgroundColor: "green",
        }}
      />
    </div>
  );
};
