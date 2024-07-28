import React from "react";
import { eleStyle, labelStyle, inputStyle } from "./commonStyle";

const Resume = () => {
  return (
    <div style={eleStyle}>
      <label htmlFor="resume" style={labelStyle}>
        Upload Resume<span>*</span>
      </label>
      <input
        type="file"
        id="resume"
        name="resume"
        accept=".pdf"
        style={inputStyle}
        required
      />
    </div>
  );
};

export default Resume;
