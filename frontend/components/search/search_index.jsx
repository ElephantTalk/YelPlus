import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Nav from "../nav/nav";

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.hasSearchContent = false;
    this.state = {
      businesses: [],
      searchValues: "",
    };
    // this.fetchBusinesses = this.fetchBusinesses.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleCallback = (childData) => {
  //   this.setState({ searchValues: childData });
  // };
  componentDidMount() {
    this.hasSearchContent = true;
    window.scrollTo(0, 0);
    // this.props.fetchBusinesses();
  }
  render() {
    const { searchValues } = this.state;
    return (
      <>
        <div className="index-background">
          <header className="index-header">
          <Nav fetchBusinesses={this.props.fetchBusinesses} />
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
