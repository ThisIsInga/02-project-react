import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                <NavLink to='/dialogs/1' className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Sasha</NavLink>
                <NavLink to='/dialogs/2' className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Oleg</NavLink>
                <NavLink to='/dialogs/3' className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Ulia</NavLink>
                <NavLink to='/dialogs/4' className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Petrov</NavLink>
                <NavLink to='/dialogs/5' className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Natasha</NavLink>
            </div>
            <div className={s.messages}>
                <p>Text</p>
                <p>Hi</p>
                <p>Hello</p>
                <p>How are you?</p>
                <p>Good</p>
            </div>
        </div>
    )
}

export default Dialogs;