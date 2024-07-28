import React from "react";
import { eleStyle, labelStyle, inputStyle } from "./commonStyle";

const LastName = () => {
  return (
    <div style={eleStyle}>
      <label htmlFor="lastName" style={labelStyle}>
        Last Name<span>*</span>
      </label>
      <input
        type="text"
        id="lastName"
        placeholder="Enter Last Name"
        style={inputStyle}
        required
      />
    </div>
  );
};

export default LastName;
