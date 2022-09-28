import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";
import { ScrollUpStyLe } from "./CardStyle.style";

const ScrollToTopBtn = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScroll(window.scrollY > 180);
    });
  }, []);

  const ScrollUpHandler = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <ScrollUpStyLe className={isScroll ? "visible" : ""}>
      <Fab size="medium" color="primary" onClick={ScrollUpHandler}>
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollUpStyLe>
  );
};

export default ScrollToTopBtn;
