import React, { Component } from "react";
import { Link } from "react-router-dom";

// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <Button collor="inherit" component={Link} to="/">
            Home
          </Button>
          <Button collor="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button collor="inherit" component={Link} to="/signup">
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
