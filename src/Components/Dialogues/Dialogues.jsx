import React from "react";
import s from './Dialogues.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {createAddNewMessageAction, createAddNewTextMessageAction} from "../../Redux/dialoguesPageReducer";

const Dialogues = (props) => {
    let dialogData = props.state.dialogData;
    let messageData = props.state.messageData;

    let dialogs = dialogData.map(dialog => {
        return <Dialog name={dialog.name} id={dialog.id} src={dialog.src}/>
    })
    let messages = messageData.map(message => {
        return <Message content={message.message}/>
    })

    let textAreaRef = React.createRef();


    let addMessage = ()=>{
        let text = textAreaRef.current.value;
        let action = createAddNewMessageAction(text);
        props.dispatch(action);
        text = '';
        action = createAddNewTextMessageAction(text);
        props.dispatch(action);
    }
    let onMessageChange = ()=>{
        let text = textAreaRef.current.value;
        let action = createAddNewTextMessageAction(text);
        props.dispatch(action);
    }


    return (<div className={s.content}>
        <div className={s.dialogues}>
            {dialogs}
        </div>
        <div className={s.messages}>
            {messages}
            <div className={s.input}>
                <textarea onChange={onMessageChange}  ref={textAreaRef} value={props.state.newTextMessage}></textarea>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    </div>)
}

export default Dialogues;