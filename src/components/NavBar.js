import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  flex: 1,
  padding: "10px",
  border: "solid 1px blanchedalmond",
  background: "blue",
  textDecoration: "none",
  color: "blanchedalmond",
  verticalAlign: "center", 
  textAlign: "center"
};

function NavBar(){
  return (
    <header>
      <div className="nav-bar">
        <h1 id="logo">Famigistry.com</h1>
      <NavLink to="/" exact id="home-btn" style={linkStyles} activeStyle={{background: "darkblue"}}>
        Home
      </NavLink>
      <NavLink to="/members" exact id="find-btn" style={linkStyles} activeStyle={{background: "darkblue"}}>
        Find Member
      </NavLink>
      <NavLink to="/add" exact id="add-btn" style={linkStyles} activeStyle={{background: "darkblue"}}>
        Add Member
      </NavLink>
      </div>
    </header>
  )
}
export default NavBar;