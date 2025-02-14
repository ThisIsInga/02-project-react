import React from 'react';
import s from './Dialogs.module.css';
import Users from './Users/Users';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                <Users names={props.names}/>
            </div>
            <div className={s.messages}>
                <Messages messages={props.messages}/>
            </div>
        </div>
    )
}

export default Dialogs;