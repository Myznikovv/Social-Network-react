import {renderNewAppTree} from "../render";

let state = {
    dialogsPage: {
        messageData:
            [
                {id: 0, message: 'Пойдем есть'},
                {id: 1, message: 'Как дела с ариной'},
            ],
        dialogData:
            [
                {id: 0, name: 'Vitaly'},
                {id: 1, name: 'Aleksandr'},
                {id: 2, name: 'Kate'},
                {id: 3, name: 'Agelina'},
                {id: 4, name: 'Artur'}
            ]
    },
    profilePage: {
        postsData:
            [
                {id: 0, content: 'Сегодня первый день лета, сказал бы я)', likeCount: 6},
                {id: 1, content: "Кокое у меня сегодня хорошее настроение", likeCount: 4},
                {id: 2, content: "Кокое у меня сегодня так себе настроение", likeCount: 0},
            ]
    }
}

export let addPost = (postMessage)=>{
    let newPost ={
        id:5, content:postMessage, likeCount :0
    }
    state.profilePage.postsData.push(newPost);
    renderNewAppTree(state);
}
export default state