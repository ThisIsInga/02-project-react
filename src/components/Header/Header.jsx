import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return(
        <div className={s.header}>
            <img src='https://cdn.dribbble.com/users/3247295/screenshots/6292772/jellyfish_logo_4x.png' />
        </div>
    );
}

export default Header;