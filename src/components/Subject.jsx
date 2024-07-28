import React from "react";
import { choicesStyle } from "./commonStyle";

const Subject = () => {
  return (
    <>
      <label>Your Favourite Subjects</label>
      <div style={choicesStyle}>
        <input type="checkbox" name="maths" id="maths" />
        <label htmlFor="maths">Maths</label>
        <input type="checkbox" name="physics" id="physics" />
        <label htmlFor="physics">Physics</label>
        <input type="checkbox" name="chemistry" id="chemistry" />
        <label htmlFor="chemistry">Chemistry</label>
      </div>
    </>
  );
};

export default Subject;
