import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = ()=>{
    return(
        <div className={s.postsBlock}>
            My posts
            <div>
                <textarea>New Post</textarea>
                <button>Add Post</button>
            </div>
            <div>
                New posts
            </div>
            <Post content='Сегодня первый день лета, сказал бы я)' count="6"/>
            <Post content="Кокое у меня сегодня хорошее настроение" count="4"/>
        </div>
    )
}
export default Posts;