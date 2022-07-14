import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";
import {createAddNewTextAction, createAddPostAction} from "../../../Redux/state";


const Posts = (props) => {


    let newPostElem = React.createRef();
    let postsData = props.listOfPosts;

    let posts = postsData.map(post => {
        return (<Post content={post.content} count={post.likeCount}/>);
    })

    let addPost = () => {
        let text = newPostElem.current.value;
        let action = createAddPostAction(text);
        props.detach(action);
        action = createAddNewTextAction('')
        props.detach(action);
    }

    let onPostChange = () => {
        let text = newPostElem.current.value;
        let action = createAddNewTextAction(text)
        props.detach(action);
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElem} value={props.newText}/>
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
