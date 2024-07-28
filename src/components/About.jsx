import React from "react";
import { eleStyle, labelStyle } from "./commonStyle";

const About = () => {
  return (
    <div style={eleStyle}>
      <label htmlFor="about" style={labelStyle}>
        About
      </label>
      <textarea
        name="about"
        id="about"
        placeholder="About your self"
        rows="7"
        style={{ resize: "none", height: "100%", width: "100%" }}
      ></textarea>
    </div>
  );
};

export default About;
