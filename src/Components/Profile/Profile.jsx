import React from "react";
import Posts from "./Posts/Posts";
import s from "./Profile.module.css";
import Info from "./Info/Info";

const Profile = () => {
    return (
        <div>
            <Info/>
            <Posts/>
        </div>);
}

export default Profile;