import React from "react";
import s from './Dialogues.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogues = (props) => {

    let dialogs = props.dialogData.map(dialog => {
        return <Dialog name={dialog.name} id={dialog.id} src={dialog.src}/>
    })
    let messages = props.messageData.map(message => {
        return <Message content={message.message}/>
    })

    let textAreaRef = React.createRef();


    let addMessage = ()=>{
        let text = textAreaRef.current.value;
        props.addNewMassage(text);
        props.addNewTextMessage('');
    }
    let onMessageChange = ()=>{
        let text = textAreaRef.current.value;
        props.addNewTextMessage(text);
    }


    return (<div className={s.content}>
        <div className={s.dialogues}>
            {dialogs}
        </div>
        <div className={s.messages}>
            {messages}
            <div className={s.input}>
                <textarea onChange={onMessageChange}  ref={textAreaRef} value={props.newTextMessage}></textarea>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    </div>)
}

export default Dialogues;