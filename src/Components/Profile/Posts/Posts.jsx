import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = (props) => {

    let postsData = props.listOfPosts;
    let posts = postsData.map(post => {
        return (<Post content={post.content} count={post.likeCount}/>);
    })

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <textarea>New Post</textarea>
                <button>Add Post</button>
            </div>
            <div>
                New posts
            </div>
            {posts}
        </div>
    )
}
export default Posts;
