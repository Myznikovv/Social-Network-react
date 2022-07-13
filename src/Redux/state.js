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
            ],
        newTextPost:'new post',
        addNewText: (textAreaMessage)=>{
            state.profilePage.newTextPost = textAreaMessage;
            renderNewAppTree(state);
        }
    }
}
export let addPost = (postMessage)=>{
    let id=5;
    let newPost ={
        id: id, content:postMessage, likeCount :0
    }
    id++
    state.profilePage.postsData.push(newPost);
    renderNewAppTree(state);
}
let renderNewAppTree = ()=>{console.log('change')}

export const subscribe = (observer)=>{
    renderNewAppTree = observer;
}
export default state