const ADD_NEW_TEXT_MESSAGE = 'ADD-NEW-TEXT-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
        messageData:
            [
                {id: 0, message: 'Пойдем есть'},
                {id: 1, message: 'Как дела с ариной'},
            ],
        dialogData:
            [
                {
                    id: 0,
                    name: 'Vitaly',
                    src: "https://sun1-85.userapi.com/s/v1/ig2/raudKIgvz1euSncyo-Z0waSwsUnBpzXcD1NZz4qF9QlsI0-crx-v_RB8BL8ZEQsgmPtuEooZkY7hUaqDs0rcG2LB.jpg?size=200x200&quality=96&crop=462,754,809,809&ava=1"
                },
                {id: 1, name: 'Aleksandr', src: "https://vk.com/images/deactivated_200.gif"},
                {id: 2, name: 'Kate', src: "https://vk.com/images/deactivated_200.gif"},
                {
                    id: 3,
                    name: 'Agelina',
                    src: "https://sun9-59.userapi.com/impf/iatTQbHwfopxEJkOR5aL4hVwwA4wdIKAsH0j_g/VS22gNnc64M.jpg?size=1735x2160&quality=96&sign=6ffcb89c30946041f8ef1ba31f4c8a82&type=album"
                },
                {
                    id: 4,
                    name: 'Andrey',
                    src: "https://sun1-86.userapi.com/impf/c830608/v830608499/19f197/zj99yg5LzqE.jpg?size=865x1080&quality=96&sign=99ec78f285d2f419cca2e92e171ab2b7&type=album"
                }
            ],
        newTextMessage: "Message"
    }

const dialogPageReducer = (state = initialState, action)=>{
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