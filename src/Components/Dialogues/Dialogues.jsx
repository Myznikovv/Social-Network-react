import React from "react";
import s from './Dialogues.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props)=>{
    let dialogPath = `/dialogues/${props.id}`;
    return(
        <div className={s.dialog}>
            <NavLink to={dialogPath}>{props.name}</NavLink>
        </div>
    )
}
const Message =(props)=>{
    return(
        <div className={s.message}>
            {props.content}
        </div>
    )
}

const Dialogues = (props)=>{
    let dialogData = props.state.dialogData;
    let messageData = props.state.messageData;

    let dialogs = dialogData.map(dialog=>{
        return <Dialog name={dialog.name} id={dialog.id}/>
    })
    let messages = messageData.map(message=>{
        return  <Message content={message.message}/>
    })

    return (
        <div className={s.content}>
            <div className={s.dialogues}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    );

}

export default Dialogues;