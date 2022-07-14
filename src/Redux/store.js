import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialoguesPageReducer";

const ADD_NEW_TEXT = 'ADD-NEW-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_NEW_TEXT_MESSAGE = 'ADD-NEW-TEXT-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postsData:
                [
                    {id: 0, content: 'Сегодня первый день лета, сказал бы я)', likeCount: 6},
                    {id: 1, content: "Кокое у меня сегодня хорошее настроение", likeCount: 4},
                    {id: 2, content: "Кокое у меня сегодня так себе настроение", likeCount: 0},
                ],
            newTextPost: 'new post'
        }
    },
    getState() {
        return this._state;
    },
    renderNewAppTree() {
        console.log('change')
    },
    subscribe(observer) {
        this.renderNewAppTree = observer;
    },
    detach(action) {
        profilePageReducer(this._state.profilePage, action);
        dialogPageReducer(this._state.dialogsPage, action);
        this.renderNewAppTree(this._state);
    }
}



export default store