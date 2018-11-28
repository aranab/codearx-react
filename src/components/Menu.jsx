import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome, FaCalendarPlus, FaTable, FaUserFriends,
} from 'react-icons/fa';

export const Menu = () => (
  <nav className="menu">
    <NavLink to="/" activeClassName="selected">
      <FaHome />
    </NavLink>
    <NavLink to="/add-day" activeClassName="selected">
      <FaCalendarPlus />
    </NavLink>
    <NavLink to="/list-days" activeClassName="selected">
      <FaTable />
    </NavLink>
    <NavLink to="/members" activeClassName="selected">
      <FaUserFriends />
    </NavLink>
  </nav>
);

export default 'Menu';
