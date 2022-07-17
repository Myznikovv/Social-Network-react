import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderNewAppTree=(state)=>{
    root.render(
        <React.StrictMode>
            <App
                store={store}
                data={state}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
}
renderNewAppTree(store.getState());
store.subscribe(()=>{
    let state = store.getState()
    renderNewAppTree(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
