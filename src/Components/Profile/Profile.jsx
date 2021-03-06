import React from "react";
import Info from "./Info/Info";
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return (
        <div>
            <Info/>
            <PostsContainer
                store={props.store}
            />
        </div>);
}

export default Profile;