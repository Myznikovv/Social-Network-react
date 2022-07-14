const ADD_NEW_TEXT_MESSAGE = 'ADD-NEW-TEXT-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const dialogPageReducer = (state, action)=>{
    switch(action.type){

        case ADD_NEW_MESSAGE:
            let id =3;
            let newMessage={
                id:id, message:action.text
            }
            id++;
            state.messageData.push(newMessage);
            return state

        case ADD_NEW_TEXT_MESSAGE:
            state.newTextMessage = action.text;
            return state
        default:
            return state;
    }

}

export const createAddNewTextMessageAction = (text) => {
    return (
        {type: ADD_NEW_TEXT_MESSAGE, text: text}
    )
}

export const createAddNewMessageAction = (text)=>{
    return(
        {type:ADD_NEW_MESSAGE, text:text}
    )
}

export default dialogPageReducer;