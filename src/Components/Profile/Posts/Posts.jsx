import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = ()=>{
    return(
        <div>
            My posts
            <div>
                New posts
            </div>
            <Post content='tjkntnt' count="6"/>
            <Post content="Тег2" count="4"/>
        </div>
    )
}
export default Posts;