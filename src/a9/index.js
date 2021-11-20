import React from "react";
import {Route} from "react-router-dom";
import Build from "./Build";
import HomeScreen9 from "./Build/HomeScreen/HomeScreen";
import ExploreScreen9 from "./Build/ExploreScreen/ExploreScreen";
import ProfileScreen9 from "./Build/ProfileScreen/ProfileScreen";
import EditScreen9 from "./Build/ProfileScreen/EditScreen";
import Practice from "./Practice/index"

const A9 = () => {
    return(
        <div>
            <Route path={["/", "/a9", "/a9/practice"]} exact={true}>
                <Practice/>
            </Route>
            <Route path="/a9/twitter">
                <Build/>
            </Route>
            <Route path="/a9/twitter/home" component={HomeScreen9} exact={true}/>
            <Route path="/a9/twitter/explore" component={ExploreScreen9} exact={true}/>
            <Route path="/a9/twitter/profile" component={ProfileScreen9} exact={true}/>
            <Route path="/a9/twitter/editProfile" component={EditScreen9} exact={true}/>

        </div>
    )
}

export default A9;