import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", bindHandleScroll);
  });

  const bindHandleScroll = (e) => {
    const scrollTop =
      (e.srcElement ? e.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (e.srcElement ? e.srcElement.body.scrollTop : 0);

    if (scrollTop > 0 && scrollTop <= 800) {
      setShowBtn(false);
    } else if (scrollTop > 800 && scrollTop <= 1600) {
      setShowBtn(true);
    }
  };

  return (
    <div style={{ position: "fixed", right: "10px", bottom: "10px" }}>
      {showBtn && (
        <Link to="home" spy={true} smooth={true} duration={500}>
          {/* <button>Top</button> */}
          <i class="fas fa-angle-up scroll-to-top-btn"></i>
          {/* <i class="fab fa-linkedin fa-lg icon-linkedin"></i> */}
        </Link>
      )}
    </div>
  );
};

export default ScrollToTop;
