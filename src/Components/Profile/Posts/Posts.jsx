import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = ()=>{

    let postsData = [
        {id: 0, content:'Сегодня первый день лета, сказал бы я)', likeCount: 6},
        {id: 1, content:"Кокое у меня сегодня хорошее настроение", likeCount:4},
    ]
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
            <Post content={postsData[0].content} count={postsData[0].likeCount}/>
            <Post content={postsData[1].content} count={postsData[1].likeCount}/>
        </div>
    )
}
export default Posts;