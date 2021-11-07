import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import Index from "./components/a6/Practice";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen6 from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen6 from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a7/Practice";
import HomeScreen from "./components/a7/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen";
import whoReducer from "./reducers/whoReducer";
import tweetsReducer from "./reducers/tweetsReducer";
import profileReducer from "./reducers/profileReducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
import ProfileScreen from "./components/a7/Build/ProfileScreen/ProfileScreen";
import EditScreen from "./components/a7/Build/ProfileScreen/EditScreen";

const reducer = combineReducers({tweets: tweetsReducer, who: whoReducer, profile:profileReducer})
const store = createStore(reducer);


function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a6"]} exact={true}>
                    <Index/>
                </Route>
                <Route path="/a6/twitter/home" component={HomeScreen} exact={true}>
                    <HomeScreen6/>
                </Route>
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/a6/twitter/explore" component={ExploreScreen6} exact={true}/>
                <Route path={["/", "/a7"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a7/twitter/home" component={HomeScreen} exact={true}>
                    <HomeScreen/>
                </Route>
                <Route path="/a7/twitter/explore" component={ExploreScreen} exact={true}/>
                <Route path="/a7/twitter/profile" component={ProfileScreen} exact={true}/>
                <Route path="/a7/twitter/editProfile" component={EditScreen} exact={true}/>
            </div>
        </BrowserRouter>
        </Provider>
    );

}
export default App;