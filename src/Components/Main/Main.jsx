import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming travel.</p>
            <img src={assets.compass_icon} />
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming travel.</p>
            <img src={assets.bulb_icon} />
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming travel.</p>
            <img src={assets.message_icon} />
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming travel.</p>
            <img src={assets.code_icon} />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">Gemini may display inaccurate info,take it into consideration.</p>
        </div>
      </div>
    </div>
  );
};
import "./Main.css";
import { assets } from "../../assets/assets";

export default Main;
