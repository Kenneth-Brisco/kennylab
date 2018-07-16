import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <div>
      <Tilt className="Tilt title">
        <h1>
          Welcome <span style={{ display: "inline-block", width: "70px" }} />To<span
            style={{ display: "inline-block", width: "40px" }}
          />
          Kenny's <span style={{ display: "inline-block", width: "70px" }} />Lab{" "}
          <br />🌚👨🏿‍💻🔬🌏
        </h1>

        <div className="Tilt-inner pa3" />
      </Tilt>
    </div>
  );
};

export default Logo;
