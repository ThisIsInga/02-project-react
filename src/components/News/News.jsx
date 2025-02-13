import React from 'react';
import s from './News.module.css';
import Posts from './Posts/Posts';

const News = (props) => {
    let postsElements = props.posts.map(post => <Posts textPost={post.textPost} likes={post.likes} dislikes={post.dislikes}/>)
    return(
        <div>
            <div className={s.news}>
                {postsElements}
            </div>
        </div>
    );
}

export default News;