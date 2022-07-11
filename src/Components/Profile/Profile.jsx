import React from "react";
import Posts from "./Posts/Posts";

const Profile = () => {
    return (<div>
        <div>
            <img
                src='https://sun9-30.userapi.com/impf/TgJ-7xWS6fUdvCPWabpUvZXwAqRu0_9YV7pSUA/qWHBmk3u_KU.jpg?size=795x265&quality=95&crop=0,0,1590,530&sign=787d108af566aaad5ff78a4162c103d8&type=cover_group'/>
        </div>
        <div>
            ava+ description
        </div>
        <Posts/>
    </div>);
}

export default Profile;