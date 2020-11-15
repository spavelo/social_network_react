import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {Route} from "react-router-dom";
import Profile from "./components/NavLinks/Profile/Profile";
import Dialogs from "./components/NavLinks/Dialogs/Dialogs";
import Music from "./components/NavLinks/Music/Music";
import News from "./components/NavLinks/News/News";
import Settings from "./components/NavLinks/Settings/Settings";
import React from "react";
import DialogsContainer from "./components/NavLinks/Dialogs/DialogsContainer";


function App(props) { //props - объект для передачи данных
    // debugger
    return (
            <div className="wrapper">
                <Header/>
                <div className="wrapper_content">
                    <Navigation />
                    <div>
                        <Route path="/profile" render={() => <Profile />}/>
                        <Route path="/dialogs" render={() => <DialogsContainer />} />
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
    );
}

export default App;
