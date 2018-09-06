import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import { clearCurrentProfile } from "../../actions/profileActions";
import { clearCreatedTributes } from "../../actions/dashboardActions";
import "./Navbar.css";
import logo from "../../img/lookBackLogo600x600.png";
import { Redirect } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isTop: true
      height: "65px",
      background: "transparent",
      color: "white",
      toLanding: false
    };
    // this.onScroll = this.onScroll.bind(this);
  }
  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({ background: "#F1F1F2", color: "black", height: "75px" });
    } else {
      this.setState({
        background: "transparent",
        color: "white",
        height: "65px"
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCreatedTributes();
    this.props.logoutUser();
    this.setState({
      toLanding: true
    });
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    if (this.state.toLanding === true) {
      <Redirect to="/search" />;
    }

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/Dashboard"
            style={{ color: this.state.color }}
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item" style={{ color: this.state.color }}>
          <Link
            to="/Dashboard"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
            style={{ color: this.state.color }}
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{
                width: "25px",
                marginRight: "5px",
                color: this.state.color
              }}
              title="you must have a Gravatar connected to your email to display an image"
            />{" "}
            Logout
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/register"
            style={{ color: this.state.color }}
          >
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/login"
            style={{ color: this.state.color }}
          >
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav
        className="navbar navbar-expand-sm fixed-top mb-4"
        style={{
          height: this.state.height,
          transition: "all 0.6s",
          WebkitTransition: "all 0.6s",
          background: this.state.background
        }}
      >
        <span className="navbar-toggler-icon" />
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: this.state.color }}
          >
            <img
              id="logo1"
              src={logo}
              style={{ height: "50px", width: "50px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  id="cool-link"
                  className="nav-link"
                  to="/profiles"
                  style={{ color: this.state.color }}
                >
                  {" "}
                  Tributes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/search"
                  style={{ color: this.state.color }}
                >
                  {" "}
                  Search
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCreatedTributes }
)(Navbar);
