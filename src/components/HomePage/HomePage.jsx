import React from "react";
import Carusel from "../../carusel/Carusel";

const HomePage = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div>
        <img
          style={{ width: "200px", margin: "30px" }}
          src="https://play.hbomax.com/assets/images/branding/desktop/hbomax/dt-hbomax-logo-in_app.svg"
          alt=""
        />
      </div>
      <Carusel />
    </div>
  );
};

export default HomePage;
