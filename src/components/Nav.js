import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const Nav = (props) => {
  const loggedIn = props.auth;
  if (!loggedIn) {
    return (
      <div className="navigation">
        <NavLink className="navitem" to="/">Home{""}</NavLink>
        <NavLink className="navitem" to="/howitworks">How It Works{""}</NavLink>
        <NavLink className="navitemright" to="/login">Sign Up{""}</NavLink>
        <NavLink className="navitem" to="/login">Log In{""}</NavLink>
      </div>
    );
  }
  else {
    return (
      <div className="navigation">
        <NavLink className="navitem" to="/">Home{""}</NavLink>
        <NavLink className="navitem" to="/howitworks">How It Works{""}</NavLink>
        <NavLink className="navitemright" to="/my/profile">My Profile{""}</NavLink>
        <a href="http://localhost:4000/auth/logout" className="navitem">Logout</a>

      </div>
    );
  }
};

export default Nav;
