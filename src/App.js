import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar"
import Profile from "./Components/Profile/Profile";
import Dialogues from "./Components/Dialogues/Dialogues";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path='/profile/*' element={
                            <Profile
                            state={props.data.profilePage}
                            dispatch={props.dispatch}
                        />
                        }
                        />
                        <Route
                            path='/dialogues/*'
                            element={
                            <Dialogues
                                state={props.data.dialogsPage}
                                dispatch={props.dispatch}
                            />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
