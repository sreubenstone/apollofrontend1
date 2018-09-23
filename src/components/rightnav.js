import React from "react";
import { NavLink } from "react-router-dom";

const Rightnav = () => {
  return (
    <div className="rightnavvy">
      <NavLink to="/">Signup |{"            "}</NavLink>
      <NavLink to="/howitworks">
        Login
        {"              "}
      </NavLink>
    </div>
  );
};

export default Rightnav;
