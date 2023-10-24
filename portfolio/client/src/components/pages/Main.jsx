import React from "react";
import "./Main.css";
import Header from "../Header";
const Main = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="title">
          I'm Vadim <br></br> and I'm ready to create
        </div>
        <hr className="line" />
        <div className="about">
          <p>
            My name is Vadim. I was interested in computer programming since the
            age of 14, but really started doing it in 16. Java was my first
            language. I really enjoyed it. My first interesting project was
            calculator. It had interface and fancy buttons. At that time I
            realised that applications I use every day are not that complicated.
            <br />
          </p>
          <hr className="line" />
        </div>
      </div>
    </div>
  );
};

export default Main;
