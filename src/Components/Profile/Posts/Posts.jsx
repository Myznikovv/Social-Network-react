import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = (props) => {

    let newPostElem = React.createRef();
    let postsData = props.listOfPosts;

    let posts = postsData.map(post => {
        return (<Post content={post.content} count={post.likeCount}/>);
    })

    let addPost = ()=>{
        let text = newPostElem.current.value;
        props.addPosts(text);
    }
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <textarea ref={newPostElem}>New Post</textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div>
                New posts
            </div>
            {posts}
        </div>
    )
}
export default Posts;
