import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, className, children }) => {
  return (
    <li>
      <Link to={to} className={className}>
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
