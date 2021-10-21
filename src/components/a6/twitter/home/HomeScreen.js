import React from "react";
import HomeComponent from "./HomeComponent";
import PostSummaryList from "../../Build/PostSummaryList/PostSummaryLis";
import NavigationSidebar from "../../Build/NavigationSidebar/NavigationSidebar";

const HomeScreen = () => {
    return (
        <div className={"row mt-2"}>
            <div className={"col-2 col-md-2 col-lg-1 col-xl-2"}>
                <NavigationSidebar active="home"/>
            </div>
            <div className={"col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 mt-2 border-1 border-dark"}
                 style={{"position": "relative"}}>
                <HomeComponent/>
            </div>
            <div className={"d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"}>
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default HomeScreen;