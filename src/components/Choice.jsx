import React from "react";
import { eleStyle, labelStyle, inputStyle } from "./commonStyle";

const Choice = () => {
  return (
    <div style={eleStyle}>
      <label htmlFor="choice" style={labelStyle}>
        Select your choice
      </label>
      <select
        name="choice"
        id="choice"
        style={{ ...inputStyle, backgroundColor: "#F2F3F4" }}
      >
        <option value="a" selected>
          Select your Ans
        </option>
        <option value="a">a.</option>
        <option value="b">b.</option>
        <option value="c">c.</option>
        <option value="d">d.</option>
      </select>
    </div>
  );
};

export default Choice;
