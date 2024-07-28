import React from "react";
import { eleStyle, labelStyle, inputStyle } from "./commonStyle";

const Email = () => {
  return (
    <div style={eleStyle}>
      <label htmlFor="email" style={labelStyle}>
        Enter Email<span>*</span>
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter email"
        style={inputStyle}
        required
      />
    </div>
  );
};

export default Email;
