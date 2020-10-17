import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x41a9f2,
          midtoneColor: 0x61cf,
          lowlightColor: 0xb1b1b1,
          baseColor: 0xffffff,
          blurFactor: 0.35,
          speed: 5.0,
          zoom: 3.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="home-container" id="home">
      <div
        ref={vantaRef}
        className="home-container"
        style={{
          height: "100vh",
          position: "absolute",
          zIndex: -2,
        }}
      ></div>
      <div className="home-wrapper">
        <div className="background-img"></div>
        <div className="background-img-overlay"></div>

        <div>
          <h4 className="home-greeting">Hello, I'm</h4>
          <h1 className="home-name">NAN YUAN</h1>
          <h4 className="home-title">
            Full-stack developer| Front-end developer
          </h4>
          <div className="icons-wrapper">
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <i className="fab fa-linkedin fa-lg icon-linkedin"></i>
            </a>
            <a href="https://github.com/n-yuan" target="_blank">
              <i className="fab fa-github fa-lg icon-github"></i>
            </a>
            <a href="mailto: nan.yuan.dev@gmail.com">
              <i className="fas fa-at icon-at fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <i className="fas fa-id-card icon-id-card fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
