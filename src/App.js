import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import {BrowserRouter, Link, Route} from "react-router-dom";


import whoReducer from "./reducers/whoReducer";
import tweetsReducer from "./reducers/tweetsReducer";
import profileReducer from "./reducers/profileReducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";


const reducer = combineReducers({tweets: tweetsReducer, who: whoReducer, profile: profileReducer})
const store = createStore(reducer);


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Link to="/a6/">A6</Link> |
                <Link to="/a7/">A7</Link> |
                <Link to="/a8/">A8</Link> |
                <Link to="/a9/">A9</Link>


            </BrowserRouter>
        </Provider>
    );

}

export default App;