import React from "react";
import SessionContainer from "../session/session_container";
import { Link } from "react-router-dom";

const SplashHeader = () => (
  <header className="splash-header">
    <div className="left-splash-header-nav">
      <ul className="left-splash-header-elements">
        <li id="write-review" className="header-nav_item">
          <a className="header-nav_link">Write a Review</a>
        </li>
        <li id="events" className="header-nav_item">
          <a className="header-nav_link">Events</a>
        </li>
        <li id="talk" className="header-nav_item">
          <a className="header-nav_link">Talk</a>
        </li>
        <li id="biz" className="header-nav_item">
          <a className="header-nav_link">Yelp for Business</a>
        </li>
      </ul>
    </div>
    <SessionContainer className="right-splash-header-nav" />
  </header>
);

export default SplashHeader;
