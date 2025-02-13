import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className={s.navBar}>
            <NavLink to='/news' className={({ isActive }) => (isActive ? s.activeLink : undefined)}>News</NavLink>
            <NavLink to='/dialogs' className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Dialogs</NavLink>
      </div>
    );
}

export default NavBar;