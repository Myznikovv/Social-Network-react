import React from "react";
import {createAddNewTextAction, createAddPostAction} from "../../../Redux/profilePageReducer";
import Posts from "./Posts";


const PostsContainer = (props) => {
    let state = props.store.getState();


    let addPost = (text) => {
        let action = createAddPostAction(text);
        props.store.dispatch(action);
        action = createAddNewTextAction('')
        props.store.dispatch(action);
    }

    let onPostChange = (text) => {
        let action = createAddNewTextAction(text)
        props.store.dispatch(action);
    }

    return (
        <Posts updateNewPost={onPostChange}
               createNewPost={addPost}
               listOfPosts={state.profilePage.postsData}
               newText={state.profilePage.newTextPost}
        />
    )
}
export default PostsContainer;
