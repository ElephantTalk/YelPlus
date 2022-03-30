import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class SplashCategories extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    window.scrollTo(0, 0);
    this.props
      .searchCategories(type)
      .then(() => this.props.history.push(`/businesses?term=${type}`));
  }

  render() {
    return (
      <div className="biz-footer">
        <h2 className="splash-categories-title">
          Find the Best Businesses in Town
        </h2>
        <div className="splash-categories-container">
          <div
            className="splash-categories-item"
            onClick={() => this.handleClick("Chinese")}
          >
            <a className="splash-categories-pic-container">
              <img
                className="splash-categories-pic"
                src="https://cdn.vox-cdn.com/thumbor/NylXhUxHg2ZLh31jMbOi9hcMURI=/0x0:5760x3840/1200x900/filters:focal(2420x1460:3340x2380)/cdn.vox-cdn.com/uploads/chorus_image/image/66683596/Atlas_Kitchen_30.0.jpg"
                alt="picture"
              />
              <h3 className="splash-categories-item-text">Chinese</h3>
            </a>
          </div>
          <div
            className="splash-categories-item"
            onClick={() => this.handleClick("Italian")}
          >
            <div className="splash-categories-pic-container">
              <img
                className="splash-categories-pic"
                src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/02/italian-food.jpg?quality=82&strip=1&resize=640%2C360"
                alt="picture"
              />
            </div>
            <p className="splash-categories-item-text">Italian</p>
          </div>
          <div
            className="splash-categories-item"
            onClick={() => this.handleClick("Japanese")}
          >
            <div className="splash-categories-pic-container">
              <img
                className="splash-categories-pic"
                src="https://i.pinimg.com/originals/85/2e/6c/852e6c1646c383d558a20070524c7882.jpg"
                alt="picture"
              />
            </div>
            <p className="splash-categories-item-text">Japanese</p>
          </div>
          <div
            className="splash-categories-item"
            onClick={() => this.handleClick("Mexican")}
          >
            <div className="splash-categories-pic-container">
              <img
                className="splash-categories-pic"
                src="https://www.welcometothetable.coop/sites/default/files/wp-content/uploads/2011/11/The_Food_of_Mexico_7.jpg"
                alt="picture"
              />
            </div>
            <p className="splash-categories-item-text">Mexican</p>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => ({});
const mDTP = (dispatch) => ({});

export default withRouter(connect(mSTP, mDTP)(SplashCategories));
