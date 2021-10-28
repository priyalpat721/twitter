import React from "react";
import ExploreComponent from "./ExploreComponent.js";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import WhoToFollowList from "../WhoToFollow/WhoToFollowList";
import who from "../WhoToFollow/who";

const ExploreScreen = () => {
    return(
        <div className={"row mt-2"}>
            <div className={"col-2 col-md-2 col-lg-1 col-xl-2"}>
                <NavigationSidebar active="explore"/>
            </div>
            <div className={"wd-center-col col-10 col-md-10 col-lg-7 col-xl-6"}>
                <ExploreComponent/>
            </div>
            <div className={"d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"}>
                <WhoToFollowList who={who}/>
            </div>
        </div>
    );
};
export default ExploreScreen;

