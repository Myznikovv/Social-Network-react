import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogData = [
    {id: 0, name:'Vitaly'},
    {id: 1, name:'Aleksandr'},
    {id: 2, name:'Kate'},
    {id: 3, name:'Agelina'},
    {id: 4, name:'Artur'}
]

let messageData = [
    {id: 0, message:'Пойдем есть'},
    {id: 1, message:'Как дела с ариной'},
]

let postsData = [
    {id: 0, content:'Сегодня первый день лета, сказал бы я)', likeCount: 6},
    {id: 1, content:"Кокое у меня сегодня хорошее настроение", likeCount:4},
    {id: 2, content:"Кокое у меня сегодня так себе настроение", likeCount:0},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App listOfDialogues={dialogData} listOfMessages={messageData} listOfPosts={postsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
