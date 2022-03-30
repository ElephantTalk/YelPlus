import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="index-background">
          <header className="index-header">
            <Nav />
          </header>
          <div className="index-main">
            <div className="left-container">
              <ul className="biz-results">
                <li className="biz"></li>
              </ul>
            </div>
            <div className="right-container"></div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchIndex;
