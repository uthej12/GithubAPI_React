import React, { Component } from "react";
import logo from "../branding.png";
/**
 * GitHub Gist Assesment by Axonista
 * Author: Uthej Goud
 * goudtigulla@gmail.com
 */
/*
Navbar component responsible for rendereing the Navbar, using the given logo.
*/
function Navbar() {
  return (
    <nav className="navbar navbar-light navigationBar">
      <div className="container pl-5">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" height="50px" width="120px"></img>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
