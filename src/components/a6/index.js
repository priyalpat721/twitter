import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Practice from "./Practice";
import HomeScreen from "./Build/HomeScreen/HomeScreen";
import HelloWorld from "./HelloWorld";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";

const A6 = () => {
    return(
        <div>
            <BrowserRouter>
                <Route path={["/", "/a6"]} exact={true}>
                    <A6/>
                </Route>
                <Route path={["/", "/a6"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a6/twitter/home" component={HomeScreen} exact={true}>
                    <HomeScreen/>
                </Route>
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/a6/twitter/explore" component={ExploreScreen} exact={true}/>

            </BrowserRouter>
        </div>
    )
}

export default A6;