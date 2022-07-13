import React from "react";
import Posts from "./Posts/Posts";
import s from "./Profile.module.css";
import Info from "./Info/Info";


const Profile = (props) => {
    return (
        <div>
            <Info/>
            <Posts
                listOfPosts={props.state.postsData}
                addPosts={props.addPosts}
                newText={props.state.newTextPost}
                addNewText={props.state.addNewText}
            />
        </div>);
}

export default Profile;