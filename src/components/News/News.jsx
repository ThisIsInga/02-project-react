import React from 'react';
import s from './News.module.css';
import Posts from './Posts/Posts';

const News = () => {
    return(
        <div className={s.news}>
            <Posts textPost='Hello its my first text here' likes='1001' dislikes='300'/>
            <Posts textPost='Hello there' likes='500' dislikes='100'/>
            <Posts textPost='I like this website!' likes='100' dislikes='0'/>
      </div>
    );
}

export default News;