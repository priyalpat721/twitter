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
        <Provider store={store}>
            <div>
                <Route path={["/", "/a9/twitter/home"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/a9/twitter/explore"
                       exact={true} component={ExploreScreen}/>
                <Route path="/a9/twitter/profileReducer"
                       exact={true} component={ProfileScreen}/>
            </div>
        </Provider>
    );
};
export default Build;