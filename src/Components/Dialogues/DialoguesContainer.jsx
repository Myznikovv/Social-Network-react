import React from "react";
import {createAddNewMessageAction, createAddNewTextMessageAction} from "../../Redux/dialoguesPageReducer";
import Dialogues from "./Dialogues";

const DialoguesContainer = (props) => {
    let state = props.store.getState();

    let addNewMessage = (text) => {
        let action = createAddNewMessageAction(text);
        props.store.dispatch(action);
        action = createAddNewTextMessageAction(text);
        props.store.dispatch(action);
    }
    let addNewTextMessage = (text) => {
        let action = createAddNewTextMessageAction(text);
        props.store.dispatch(action);
    }


    return (
        <Dialogues
            addNewMassage={addNewMessage}
            addNewTextMessage={addNewTextMessage}
            dialogData={state.dialogsPage.dialogData}
            messageData={state.dialogsPage.messageData}
            newTextMessage={state.dialogsPage.newTextMessage}
        />
    )
}

export default DialoguesContainer;