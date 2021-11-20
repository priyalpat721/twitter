import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./Build/HomeScreen/HomeScreen";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";
import ProfileScreen from "./Build/ProfileScreen/ProfileScreen";
import EditScreen from "./Build/ProfileScreen/EditScreen";
import Practice from "./Practice/index";

const A7 = () => {
    return(
        <div>
            <BrowserRouter>
                <Route path={["/", "/a7"]} exact={true}>
                    <A7/>
                </Route>
                <Route path={["/", "/a7"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a7/twitter/home" component={HomeScreen} exact={true}>
                    <HomeScreen/>
                </Route>
                <Route path="/a7/twitter/explore" component={ExploreScreen} exact={true}/>
                <Route path="/a7/twitter/profile" component={ProfileScreen} exact={true}/>
                <Route path="/a7/twitter/editProfile" component={EditScreen} exact={true}/>

            </BrowserRouter>
        </div>
    )
}

export default A7;