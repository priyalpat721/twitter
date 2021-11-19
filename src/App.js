import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import {BrowserRouter, Link, Route} from "react-router-dom";

import Practice7 from "./components/a7/Practice";
import HomeScreen7 from "./components/a7/Build/HomeScreen/HomeScreen";
import ExploreScreen7 from "./components/a7/Build/ExploreScreen/ExploreScreen";
import whoReducer from "./reducers/whoReducer";
import tweetsReducer from "./reducers/tweetsReducer";
import profileReducer from "./reducers/profileReducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
import ProfileScreen7 from "./components/a7/Build/ProfileScreen/ProfileScreen";
import EditScreen7 from "./components/a7/Build/ProfileScreen/EditScreen";
import Practice8 from "./components/a8/Practice";
import ProfileScreen from "./components/a8/Build/ProfileScreen/ProfileScreen";
import EditScreen from "./components/a8/Build/ProfileScreen/EditScreen";
import HomeScreen from "./components/a8/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a8/Build/ExploreScreen/ExploreScreen";
import A9 from "./a9";
import Practice9 from "./a9/Practice";
import A6 from "./components/a6";
import A7 from "./components/a7";
import A8 from "./components/a8";

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

                <div className="container">
                    <Route path={["/", "/a6"]} exact={true}>
                        <A6/>
                    </Route>
                    <Route path={["/", "/a7"]} exact={true}>
                        <A7/>
                    </Route>
                    <Route path={["/", "/a8"]} exact={true}>
                        <A8/>
                    </Route>
                    <Route path={["/", "/a9", "/a9/practice"]} exact={true}>
                        <Practice9/>
                    </Route>
                    <Route path="/a9">
                        <A9/>
                    </Route>

                  </div>
            </BrowserRouter>
        </Provider>
    );

}

export default App;