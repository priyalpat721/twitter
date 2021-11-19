import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";
import ProfileScreen from "./Build/ProfileScreen/ProfileScreen";
import EditScreen from "./Build/ProfileScreen/EditScreen";
import HomeScreen from "./Build/HomeScreen/HomeScreen";
import Practice from "./Practice/index";


const A8 = () => {
    return(
        <div>
            <BrowserRouter>
                <Route path={["/", "/a8"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a8/twitter/home" component={HomeScreen} exact={true}>
                    <HomeScreen/>
                </Route>
                <Route path="/a8/twitter/explore" component={ExploreScreen} exact={true}/>
                <Route path="/a8/twitter/profile" component={ProfileScreen} exact={true}/>
                <Route path="/a8/twitter/editProfile" component={EditScreen} exact={true}/>


            </BrowserRouter>
        </div>
    )
}

export default A8;