import {combineReducers, legacy_createStore as createStore} from "redux";
import dialoguesPageReducer from "./dialoguesPageReducer";
import profilePageReducer from "./profilePageReducer";

let reducers = combineReducers({
    dialogsPage: dialoguesPageReducer,
    profilePage: profilePageReducer
})

let store = createStore(reducers);



export default store;