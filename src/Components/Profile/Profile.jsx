import React from "react";
import Posts from "./Posts/Posts";
import Info from "./Info/Info";


const Profile = (props) => {
    return (
        <div>
            <Info/>
            <Posts
                listOfPosts={props.state.postsData}
                newText={props.state.newTextPost}
                detach={props.detach}
            />
        </div>);
}

export default Profile;