import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";

// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Tooltip, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import Notifications from "@material-ui/icons/Notifications";

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <MyButton tip="Create a Scream!">
                <AddIcon />
              </MyButton>
              <MyButton tip="Home">
                <Link to="/">
                  <HomeIcon />
                </Link>
              </MyButton>
              <MyButton tip="Notification">
                <Notifications></Notifications>
              </MyButton>
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});
export default connect(mapStateToProps)(Navbar);
