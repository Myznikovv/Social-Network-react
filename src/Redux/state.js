let store ={
    _state :{
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
            newTextPost:'new post'
        }
    },
    getState() {
        return this._state ;
    },
    /*addPost(postMessage){
        let id=5;
        let newPost ={
            id:id, content:postMessage, likeCount :0
        }
        id++
        this._state.profilePage.postsData.push(newPost);
        this.renderNewAppTree(this._state);
    },
    addNewText(textAreaMessage){
        this._state.profilePage.newTextPost = textAreaMessage;
        this.renderNewAppTree(this._state);
    },
    */
    renderNewAppTree(){console.log('change')},
    subscribe(observer){
        this.renderNewAppTree = observer;
    },
    detach(action){
       if (action.type === "ADD-POST") {
           let id=5;
           let newPost ={
               id:id, content:action.postMessage, likeCount :0
           }
           id++
           this._state.profilePage.postsData.push(newPost);
           this.renderNewAppTree(this._state);
       }else if(action.type === "ADD-NEW-TEXT"){
           this._state.profilePage.newTextPost = action.textAreaMessage;
           this.renderNewAppTree(this._state);
       }

    }
}

export const createAddPostAction = (text) => {
    return (
        {type: 'ADD-POST', postMessage: text}
    );
}

export const createAddNewTextAction = (text) =>{
    return(
        {type: 'ADD-NEW-TEXT', textAreaMessage: text}
    )
}
export default store