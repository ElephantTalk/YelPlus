import React from "react";
import { Link } from "react-router-dom";

const Session = ({ currentUser, logout }) => {
  const dropDown = () => {
    const userNavDropdown = document.getElementById("user-nav-dropdown-id");
    userNavDropdown.style.display = "block";
  };

  window.onclick = (event) => {
    if (
      !(
        event.target.matches(".user-nav") ||
        event.target.matches(".user-nav-0") ||
        event.target.matches(".user-nav-1")
      )
    ) {
      const userNavDropdownRemove = document.getElementById(
        "user-nav-dropdown-id"
      );
      if (userNavDropdownRemove) {
        userNavDropdownRemove.style.display = "none";
      }
    }
  };

  const authNav = () => (
    <ul className="not-logged-in">
      <li className="not-logged-in-login">
        <Link to="/login">Log In</Link>
      </li>
      <li className='not-logged-in-signup'><Link to="/signup" className="signup-link">Sign Up</Link></li>
    </ul>
  );

  const userNav = () => (
    <>
      <div className="user-nav" onClick={dropDown}>
        <span className="logged-in-user-avatar-clickable">
          <img
            className="user-nav-0"
            src="https://bestnycacupuncturist.com/wp-content/uploads/2016/11/anonymous-avatar-sm.jpg"
          />
        </span>
        <span className="user-nav-clickable">
          <svg
            className="user-nav-1"
            onClick={dropDown}
            id="14x14_triangle_down"
            height="100%"
            viewBox="0 0 14 14"
            width="100%"
          >
            <path d="M7 9L3.5 5h7L7 9z"></path>
          </svg>
        </span>
        <span className="user-nav-dropdown-aligner">
          <ul id="user-nav-dropdown-id" className="user-nav-dropdown">
            <li className="logout" onClick={logout}>
              Log Out
            </li>
          </ul>
        </span>
      </div>
    </>
  );

  return currentUser ? userNav() : authNav();
};

export default Session;
