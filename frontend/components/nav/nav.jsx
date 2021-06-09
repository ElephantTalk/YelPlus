import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout } = this.props;
    const sessionNav = currentUser ? (
      <div className="session-nav">
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    ) : (
      <div className="session-nav">
        <Link id="login-btn" to="/login">
          Log In
        </Link>
        <Link id="signup-btn" to="/signup">
          Sign Up
        </Link>
      </div>
    );
    return <div className="nav">{sessionNav}</div>;
  }
}

export default Nav;
