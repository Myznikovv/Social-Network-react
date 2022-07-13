import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addPost} from "./Redux/state";


export let renderNewAppTree=(state)=>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App data={state} addPost={addPost}/>
        </React.StrictMode>
    );
}
