import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className={s.navBar}>
            <NavLink to='/news' className={({ isActive }) => (isActive ? s.activeLink : undefined)}>News</NavLink>
            <NavLink to='/teest' className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Test</NavLink>
      </div>
    );
}

export default NavBar;