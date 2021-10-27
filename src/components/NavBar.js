import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const linkStyles = {
  padding: "10px",
  border: "solid 1px rgb(244, 244, 252)",
  background: "lightslategrey",
  textDecoration: "none",
  color: "rgb(244, 244, 252)",
  textAlign: "center", 
  width: "110px",
  height: "90%",
  borderRadius: "4px"
};

function NavBar(){
  return (
    <header>
      <h1 id="logo">Famigistry.com</h1>
      <div className="nav-bar">
        <NavLink to="/" exact id="home-btn" style={linkStyles} activeStyle={{background: "slategray", border: "solid 3px black", color: "black"}}>
          Home
        </NavLink>
        <NavLink to="/members" exact id="find-btn" style={linkStyles} activeStyle={{background: "slategray", border: "solid 3px black", color: "black"}}>
          Find Member
        </NavLink>
        <NavLink to="/add-member" exact id="add-btn" style={linkStyles} activeStyle={{background: "slategray", border: "solid 3px black", color: "black"}}>
          Add Member
        </NavLink>
      </div>
    </header>
  )
}
export default NavBar;