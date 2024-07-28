import React from "react";
import { choicesStyle } from "./commonStyle";

const Gender = () => {
  return (
    <>
      <label>
        Gender<span>*</span>
      </label>
      <div style={choicesStyle}>
        <input type="radio" id="male" name="gender" required />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" />
        <label htmlFor="female">Female</label>
        <input type="radio" id="other" name="gender" />
        <label htmlFor="other">Other</label>
      </div>
    </>
  );
};

export default Gender;
