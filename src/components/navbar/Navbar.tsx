import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navbar.module.scss";

const Navbar = () => {
  const arr = [
    { path: "/", text: "Stocks List" },
    { path: "/intraday", text: "Intraday Rates" },
    { path: "/about", text: "About Us" },
   
  ];

  const navLink = (route: { path: string; text: string }) => (
    <NavLink className={(e) => (e.isActive ? css.active : "")} to={route.path}>
      {route.text}
    </NavLink>
  );

  return (
    <nav className={css.navbar}>
      {arr.map((route, i) => (
        <React.Fragment key={i}>
          {i === 1 && <div className={css.spacer}></div>}
          {navLink(route)}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Navbar;
