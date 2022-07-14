import s from "../Dialog/Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Dialog = (props)=>{
    let dialogPath = `/dialogues/${props.id}`;
    return(
        <div className={s.dialog}>
            <img className={s.logo} src={props.src} alt={''}/>
            <NavLink to={dialogPath}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog