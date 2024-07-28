import React from "react";
import { eleStyle, inputStyle, labelStyle } from "./commonStyle";

const WebsiteURL = () => {
  return (
    <div style={eleStyle}>
      <label htmlFor="url" style={labelStyle}>
        Enter URL<span>*</span>
      </label>
      <input
        type="url"
        id="url"
        placeholder="Enter url"
        style={inputStyle}
        required
      />
    </div>
  );
};

export default WebsiteURL;
