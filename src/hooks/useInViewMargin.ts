import { useEffect, useState } from "react";

type Margin = "-50px" | "-500px";

const useInViewMargin = (): Margin => {
  const [margin, setMargin] = useState<Margin>("-50px");

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      setMargin(isMobile ? "-50px" : "-500px");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return margin;
};

export default useInViewMargin;
