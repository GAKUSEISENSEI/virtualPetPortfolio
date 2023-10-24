import React from "react";
import tg from "../assets/tg.png";
import inst from "../assets/inst.png";
import gh from "../assets/gh.png";
import Header from "../Header";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact">
        <div className="contacts">
          <ul>
            <li>
              <img src={tg} alt="" width="20px" />
              @GAKUSEISENSEI
            </li>
            <li>
              <img src={inst} alt="" width="20px" /> @gakuseisensei
            </li>
            <li className="gh">
              <a href="https://github.com/GAKUSEISENSEI" target="_blank">
                <img src={gh} alt="" width="40px" /> GAKUSEISENSEI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
