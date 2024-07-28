import React from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Email from "./Email";
import Contact from "./Contact";
import Gender from "./Gender";
import Subject from "./Subject";
import Resume from "./Resume";
import WebsiteURL from "./WebsiteURL";
import Choice from "./Choice";
import About from "./About";
import Submit from "./Submit";

const Form = () => {
  const cardStyle = {
    maxWidth: "400px",
    width: "100%",
    padding: "0px 30px 30px 30px",
    boxShadow: "0px 0px 10px 5px lightgray",
    borderRadius: "10px",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ textAlign: "center", color: "green" }}>Form in React</h2>
      <form action="submit" style={formStyle}>
        <FirstName />
        <LastName />
        <Email />
        <Contact />
        <Gender />
        <Subject />
        <Resume />
        <WebsiteURL />
        <Choice />
        <About />
        <Submit />
      </form>
    </div>
  );
};

export default Form;
