import React from "react";
import { eleStyle, labelStyle, inputStyle } from "./commonStyle";

const Contact = () => {
  return (
    <div style={eleStyle}>
      <label htmlFor="contact" style={labelStyle}>
        Contact<span>*</span>
      </label>
      <input
        type="tel"
        maxLength="10"
        id="contact"
        placeholder="Enter Mobile number "
        style={inputStyle}
        required
      />
    </div>
  );
};

export default Contact;
