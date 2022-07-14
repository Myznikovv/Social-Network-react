const ADD_NEW_TEXT = 'ADD-NEW-TEXT';
const ADD_POST = 'ADD-POST';

const profilePageReducer = (state, action)=>{
    switch(action.type){
        case ADD_POST:
            let id = 5;
            let newPost = {
                id: id, content: action.postMessage, likeCount: 0
            }
            id++
            state.postsData.push(newPost);
            return state;

        case ADD_NEW_TEXT:
            state.newTextPost = action.textAreaMessage;
            return state;
        default:
            return state
    }
}

export const createAddPostAction = (text) => {
    return (
        {type: ADD_POST, postMessage: text}
    );
}

export const createAddNewTextAction = (text) => {
    return (
        {type: ADD_NEW_TEXT, textAreaMessage: text}
    )
}
export default profilePageReducer;




