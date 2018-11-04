import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserList from "./Components/UserList";
import AlbumList from "./Components/AlbumList";
import PhotoList from "./Components/PhotoList";


class App extends Component {
    render() {
        return (
            <Router>
                <div className={"app"}>
                    <div style={{display: "flex"}}>
                        <UserList/>
                        <Route path={"/users/:id"} component={AlbumList}/>
                    </div>
                    <Route path={"/users/:id/albums/:id"} component={PhotoList}/>
                </div>
            </Router>
        );
    }
}

export default App;
