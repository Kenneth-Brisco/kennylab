import React, { Component } from "react";
import Typed from "react-typed";
import "./Quote.css";

class Quote extends Component {
  render() {
    return (
      <div>
        <Typed
          className="typeStyle"
          strings={["Let's chat! I can help solve your problem!"]}
          typeSpeed={50}
          backSpeed={40}
          loop
        />
        <br />
      </div>
    );
  }
}

export default Quote;
