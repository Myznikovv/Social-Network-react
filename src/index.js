import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state,{addPost} from "./Redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";
import {subscribe} from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderNewAppTree=(state)=>{
    root.render(
        <React.StrictMode>
            <App data={state} addPost={addPost} />
        </React.StrictMode>
    );
}
renderNewAppTree(state);
subscribe(renderNewAppTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
