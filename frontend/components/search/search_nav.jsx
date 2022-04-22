import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBusinesses } from "../../util/business_api_util";
class SearchNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      // isFetched: false,
      // locationError: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInput = this.handleChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchValues = { term: "", location: "" };
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const term = this.state.term;
  //   const location = this.state.location;
  //   console.log(this.state)
  //   this.props.history.push(`/search?term=${term}&location=${location}`);
  // }
  handleSubmit = (e) => {
    e.preventDefault();
  
    const { term, location } = this.state;
    debugger
    console.log(this.state);

    this.props.history.push(`/search?term=${term}&location=${location}`, {
      term: term,
      location: location,
    });
    // this.props.fetchBusinesses(this.state);

    window.scrollTo(0, 0);
  };
  handleSearchChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { term, location } = this.state;
  //   // const createHref = (term, location) =>
  //   // '#' + basename + createPath(term, location)
  //   if (!location) {
  //     this.setState({
  //       locationError: "Can't be blank.",
  //     });
  //   } else {
  //     this.props.history.push(`/search?term=${term}&location=${location}`, {
  //       term: term,
  //       location: location,
  //     });
  //     this.setState({
  //       locationError: "",
  //     });
  //   }
  // };

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.fetchBusinesses(this.state).then(() => {
  //     this.props.history.push(`/search?term=${term}&location=${location}`);
  //   });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   let term = this.state.term;
  //   let location = this.state.location;
  //   this.props.history.push(`/search?term=${term}&location=${location}`);
  //   console.log(this.props.history)
  // }

  render() {
    return (
      <>
        <div className={`searchNav-bar-container`}>
          <form className="searchNav-bar" onSubmit={this.handleSubmit}>
            <div className="searchNav-find-bar">
              <label className="searchNav-find-label">
                <span className="field-name"></span>
                <input
                  className={`searchNav-text-search`}
                  type="text"
                  placeholder="nail salons, plumbers, takeout..."
                  value={this.state.term}
                  onChange={this.handleChange("term")}
                />
              </label>
            </div>

            <div className="searchNav-near-bar">
              <label className="searchNav-near-label">
                <span className="field-name"></span>
                <input
                  className={`searchNav-text-search`}
                  type="text"
                  placeholder="San Diego, CA"
                  value={this.state.location}
                  onChange={this.handleChange("location")}
                />
              </label>
            </div>

            <div className=" buttons-arrange-unit__09f24___9Q7O arrange-unit__09f24__rqHTg border-color--default__09f24__NPAKY">
              <div className=" arrange__09f24__LDfbs gutter-6__09f24__zfdvt layout-equal__09f24__odeM0 border-color--default__09f24__NPAKY">
                <div className=" arrange-unit__09f24__rqHTg border-color--default__09f24__NPAKY">
                  <button
                    type="submit"
                    className="find-near-button__09f24__XS9AP css-16s2nge"
                    // onClick={this.handleSubmit}
                  >
                    <span className="css-1enow5j" data-font-weight="semibold">
                      <span
                        role="img"
                        aria-label="Search"
                        className="icon--24-search-v2 css-1kq79li"
                      >
                        <svg width="24" height="24" className="icon_svg">
                          <path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"></path>
                        </svg>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(SearchNav);
