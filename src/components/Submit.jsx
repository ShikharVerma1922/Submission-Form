import React from "react";
import { eleStyle, labelStyle, buttonStyle } from "./commonStyle";

const Submit = () => {
  return (
    <div style={eleStyle}>
      <label htmlFor="submitReset" style={labelStyle}>
        Submit Or Reset
      </label>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "10px",
        }}
      >
        <input type="reset" id="submitReset" style={buttonStyle} />
        <input type="submit" id="submitReset" style={buttonStyle} />
      </div>
    </div>
  );
};

export default Submit;
