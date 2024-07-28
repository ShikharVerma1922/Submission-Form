import React from "react";
import { eleStyle, labelStyle, inputStyle } from "./commonStyle";

const FirstName = () => {
  return (
    <div style={eleStyle}>
      <label htmlFor="firstName" style={labelStyle}>
        First Name<span>*</span>
      </label>
      <input
        type="text"
        id="firstName"
        placeholder="Enter First Name"
        style={inputStyle}
        required
      />
    </div>
  );
};

export default FirstName;
