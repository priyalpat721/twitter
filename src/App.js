import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import Index from "./components/a6/Practice";
import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeScreen6 from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen6 from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HelloWorld from "./components/a6/HelloWorld";
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
import HomeScreen9 from "./a9/Build/HomeScreen/HomeScreen";
import ExploreScreen9 from "./a9/Build/ExploreScreen/ExploreScreen";
import EditScreen9 from "./a9/Build/ProfileScreen/EditScreen";
import ProfileScreen9 from "./a9/Build/ProfileScreen/ProfileScreen";
import Practice9 from "./a9/Practice";

const reducer = combineReducers({tweets: tweetsReducer, who: whoReducer, profile:profileReducer})
const store = createStore(reducer);


function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Link to="/a6/">A6</Link> |
            <Link to="/a7/">A7</Link> |
            <Link to="/a8/practice">A8</Link> |
            <Link to="/a9/practice">A9</Link>

            <div className="container">
                <Route path={["/", "/a6"]} exact={true}>
                    <Index/>
                </Route>
                <Route path="/a6/twitter/home" component={HomeScreen6} exact={true}>
                    <HomeScreen6/>
                </Route>
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/a6/twitter/explore" component={ExploreScreen6} exact={true}/>
                <Route path={["/", "/a7"]} exact={true}>
                    <Practice7/>
                </Route>
                <Route path="/a7/twitter/home" component={HomeScreen7} exact={true}>
                    <HomeScreen7/>
                </Route>
                <Route path= {["/", "/a8", "/a8/practice"]} exact={true}>
                    <Practice8/>
                </Route>
                <Route path= {["/", "/a9", "/a9/practice"]} exact={true}>
                    <Practice9/>
                </Route>
                <Route path="/a9">
                    <A9/>
                </Route>

                <Route path="/a7/twitter/explore" component={ExploreScreen7} exact={true}/>
                <Route path="/a7/twitter/profile" component={ProfileScreen7} exact={true}/>
                <Route path="/a7/twitter/editProfile" component={EditScreen7} exact={true}/>

                <Route path="/a8/twitter/explore" component={ExploreScreen} exact={true}/>
                <Route path="/a8/twitter/profile" component={ProfileScreen} exact={true}/>
                <Route path="/a8/twitter/editProfile" component={EditScreen} exact={true}/>
                <Route path="/a8/twitter/home" component={HomeScreen} exact={true}/>
                <Route path="/a9/twitter/home" component={HomeScreen9} exact={true}/>
                <Route path="/a9/twitter/explore" component={ExploreScreen9} exact={true}/>
                <Route path="/a9/twitter/profile" component={ProfileScreen9} exact={true}/>
                <Route path="/a9/twitter/editProfile" component={EditScreen9} exact={true}/>
            </div>
        </BrowserRouter>
        </Provider>
    );

}
export default App;