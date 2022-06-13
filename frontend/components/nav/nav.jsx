import React from "react";
import SessionContainer from "../session/session_container";
import { Link } from "react-router-dom";
import SearchNav from "../search/search_nav";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    // this.fetchBusinesses = this.fetchBusinesses.bind(this);
  }

  render() {
    return (
      <>
        <div className="nav-main">
          <header className="nav-header">
            <div className="nav-header-main">
              <div className="nav-logo">
                <div
                  className="nav-logo-img"
                  style={{
                    backgroundImage: `url("https://myawsbucket-test001.s3.us-west-2.amazonaws.com/navlogo.svg")`,
                  }}
                  // style={{ backgroundImage: `url(${NavLogo})` }}
                >
                  <a href="/" className="nav-logo-link" role="link">
                    Yelp
                  </a>
                </div>
              </div>
              <div className="nav-search">
                <SearchNav fetchBusinesses={this.props.fetchBusinesses} />
              </div>
              <div className="nav-session">
                <SessionContainer className="header-auth" />
              </div>
            </div>
          </header>
        </div>
      </>
    );
  }
}
export default Nav;
