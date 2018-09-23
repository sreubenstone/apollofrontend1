import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {
  const LoggedIn = props.LoggedIn;
  if (!LoggedIn) {
    return (
      <div className="navigation">
        <NavLink className="navitem" to="/">Home{""}</NavLink>
        <NavLink className="navitem" to="/howitworks">How It Works{""}</NavLink>
        <NavLink className="navitem" to="/login">Sign Up{""}</NavLink>
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
      </div>
    );
  }
};

export default Nav;
