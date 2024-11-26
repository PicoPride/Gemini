import React from "react";
import "./main.css";
import { assets } from "../../assets/assets";

function Main() {
  return (
    <>
      <div className="main">
        <nav className="navigation">
            <h1 className="gemini-title recent-entry">Gemini</h1>
            <img className="user-icon" src={assets.user_icon} alt="" />
        </nav>
      </div>
    </>
  );
}

export default Main;
