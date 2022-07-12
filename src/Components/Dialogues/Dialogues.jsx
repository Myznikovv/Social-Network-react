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

const Dialogues = ()=>{
    return (
        <div className={s.content}>
            <div className={s.dialogues}>
                <Dialog name={"Vitaly"} id={0}/>
                <Dialog name={"Aleksandr"} id={1}/>
                <Dialog name={"Kate"} id={2}/>
                <Dialog name={"Agelina"} id={3}/>
                <Dialog name={"Artur"} id={4}/>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Пойдем есть
                </div>
                <div className={s.message}>
                   Как дела с ариной
                </div>
            </div>
        </div>
    );

}

export default Dialogues;