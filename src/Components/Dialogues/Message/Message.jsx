import s from "../Message/Message.module.css";
import React from "react";

const Message =(props)=>{
    return(
        <div className={s.message}>
            <img className={s.logo} src={props.src} alt={''}/>
            {props.content}
        </div>
    )
}

export default Message