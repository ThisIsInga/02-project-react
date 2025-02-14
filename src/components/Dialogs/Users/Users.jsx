import React from 'react';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let users = props.names.map(user => (
        <NavLink to={`/dialogs/${user.id}`} className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
            {user.name}
        </NavLink>
    ));

    return (
        <div className={s.users}>
            {users}
        </div>
    );
};

export default Users;
