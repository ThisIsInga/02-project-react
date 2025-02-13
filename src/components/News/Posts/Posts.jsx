import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
    return(
        <div className={s.posts}>
            <img src='https://cdn.dribbble.com/users/1075390/screenshots/9828863/media/179e8b0bc6d09483776c64f38d16387a.png' />
            <span>{props.textPost}</span>
            <div className={s.statistics}>
                <span>likes: {props.likes}</span>
                <span>dislikes: {props.dislikes}</span>
            </div>
        </div> 
    );
}

export default Posts;