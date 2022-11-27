import React, { Component } from "react";
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <div className="app-wrapper__container">
                    <Header></Header>
                    <Navbar></Navbar>
                    <Profile></Profile>
                </div>
            </div>
        );
    }
}

export default App;