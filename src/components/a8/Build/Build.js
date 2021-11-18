import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import whoReducer from "../../../reducers/whoReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import ProfileScreen from "./ProfileScreen/ProfileScreen";

const store = createStore(whoReducer);

const Build = () => {
    return(
        <Provider store={store}/>
    );
};
export default Build;