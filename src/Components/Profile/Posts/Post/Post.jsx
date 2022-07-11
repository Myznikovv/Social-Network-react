import React from "react";
import s from './Post.module.css';

const Post = (props)=>{
    return(
        <div className={s.item}>
            <div>
                <img src='https://sun1-85.userapi.com/impg/uPLqjYE6z6fQFkEcdtchHTdrBmszBdpiNspd_A/7xjTPTnfxdw.jpg?size=810x1080&quality=96&sign=c6e3fe68e9f25efe6c45e02bd6cf8c67&type=album'/>
            </div>
            {props.content}
            <div>
                {props.count} like
            </div>
        </div>
    );
}

export default Post