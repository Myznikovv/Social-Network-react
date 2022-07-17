import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar"
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialoguesContainer from "./Components/Dialogues/DialoguesContainer";

const App = (props) => {
    debugger
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path='/profile/*' element={
                            <Profile
                            store={props.store}
                        />
                        }
                        />
                        <Route
                            path='/dialogues/*'
                            element={
                            <DialoguesContainer
                                store={props.store}
                            />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
