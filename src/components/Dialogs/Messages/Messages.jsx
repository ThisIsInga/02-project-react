import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
    let messages = props.messages.map(m => (
        <p>{m.message}</p>
    ));
    
    return (
        <div>
            {messages}
        </div>
    );
};

export default Messages;