import React from "react";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Nav from "../nav/nav";

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.hasSearchContent = false;
    this.state = {
      data: {},
      searchValues: "",
      stars: [],
      about: [],
    };
  }
  // handleCallback = (childData) => {
  //   this.setState({ searchValues: childData });
  // };
  // componentDidMount() {
  //   this.hasSearchContent = true;
  //   window.scrollTo(0, 0);
  //   // this.props.fetchBusinesses();
  // }
  render() {
    if (Object.keys(this.state.data).length === 0) {
      return (
        // <header className="index-header">
        //   <Nav fetchBusinesses={this.props.fetchBusinesses} />
        // </header>
        <h1>Hello, nothing here</h1>
      );
    }

    // Object.values(businesses).map((business) => {
    //   let rating = business.review_avg;
    //   let score =
    //     rating === 5 ? (
    //       <div>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //       </div>
    //     ) : rating >= 4.5 ? (
    //       <div>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star-half-alt"></i>
    //       </div>
    //     ) : rating >= 4 ? (
    //       <div>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="far fa-star"></i>
    //       </div>
    //     ) : rating >= 3.5 ? (
    //       <div>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star-half-alt"></i>
    //         <i className="far fa-star"></i>
    //       </div>
    //     ) : rating >= 3 ? (
    //       <div>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="far fa-star"></i>
    //         <i className="far fa-star"></i>
    //       </div>
    //     ) : rating >= 2.5 ? (
    //       <div>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star-half-alt"></i>
    //         <i className="far fa-star"></i>
    //         <i className="far fa-star"></i>
    //       </div>
    //     ) : rating >= 2 ? (
    //       <div>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="far fa-star"></i>
    //         <i className="far fa-star"></i>
    //         <i className="far fa-star"></i>
    //       </div>
    //     ) : rating >= 1.5 ? (
    //       <div>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star-half-alt"></i>
    //         <i className="far fa-star"></i>
    //         <i className="far fa-star"></i>
    //         <i className="far fa-star"></i>
    //       </div>
    //     ) : (
    //       <div>
    //         <i className="fas fa-star"></i>
    //         <i className="far fa-star"></i>
    //         <i className="far fa-star"></i>
    //         <i className="far fa-star"></i>
    //         <i className="far fa-star"></i>
    //       </div>
    //     );
    //   this.state.stars.push(score);
    // });
    // const businesses = this.props.businesses;
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
            <div className="right-container">
              {/* <Map
                history={this.props.history}
                businesses={this.state.businesses}
                type="search"
              ></Map> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(SearchIndex);
