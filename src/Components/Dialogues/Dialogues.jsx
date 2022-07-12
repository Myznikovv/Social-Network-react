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

const Dialogues = ()=>{

    let dialogData = [
        {id: 0, name:'Vitaly'},
        {id: 1, name:'Aleksandr'},
        {id: 2, name:'Kate'},
        {id: 3, name:'Agelina'},
        {id: 4, name:'Artur'}
    ]

    let messageData = [
        {id: 0, message:'Пойдем есть'},
        {id: 1, message:'Как дела с ариной'},
    ]

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