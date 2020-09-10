import React from "react";
import classes from "../style/Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.navcontainer}>
        <div className={classes.item}>
          <NavLink to="../home" activeClassName={classes.activeLink}>
            <span>Home</span>
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="../favorite" activeClassName={classes.activeLink}>
          <span>Favorite</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
