import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.formType === "Sign Up") {
      this.state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      };
    } else {
      this.state = {
        email: "",
        password: "",
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.demoLogin({
      email: "test01@gmail.com",
      password: "password",
    });
  }

  render() {
    const signup = (
      <div>
        <h1 className="greeting">Sign Up for Yelp</h1>
        <button className="demo-btn" onClick={this.demoLogin}>
          Demo Login
        </button>
        <div className="hr-line">
          <hr />
          OR
          <hr />
        </div>
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div className="full-name">
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              placeholder="First Name"
              className="text-input"
            />
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              placeholder="Last Name"
              className="text-input"
            />
          </div>
          <input
            type="email"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
            className="text-input"
          />
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
            className="text-input"
          />
          <br />
          <button className="form-btn">{this.props.formType}</button>
          <br />
          Already on yelp? <Link to="/login">Log In</Link>
        </form>
      </div>
    );

    const login = (
      <div>
        <h1 className="greeting">Log in to Yelp</h1>
        <button className="demo-btn" onClick={this.demoLogin}>
          Demo Login
        </button>
        <div className="hr-line">
          <hr />
          OR
          <hr />
        </div>
        <form onSubmit={this.handleSubmit} className="login-form">
          <input
            type="email"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
            className="text-input"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
            className="text-input"
          />
          <br />
          <button className="form-btn">{this.props.formType}</button>
          <br />
          New to Yelp? <Link to="/signup">Sign Up</Link>
        </form>
      </div>
    );

    const display = this.props.formType === "Sign Up" ? signup : login;
    return (
      <>
        <div className="session-form-container">
          <div className="session-form-content">
            <div className="session-form">{display}</div>
          </div>
        </div>
      </>
    );
  }
}

export default SessionForm;
