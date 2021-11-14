import React from "react";
import "./home.css";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import TweetList from "../TweetList/TweetList";
import PostSummaryList from "../PostSummaryList/PostSummaryLis";
import WhatsHappening from "../WhatsHappening";

const HomeScreen = () => {
    return (
        <div className={"row mt-2"}>
            <div className={"col-2 col-md-2 col-lg-1 col-xl-2"}>
                <NavigationSidebar active="home"/>
            </div>
            <div className={"wd-home col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 border-1 border-dark"}
            style={{position:"relative"}}>
                <WhatsHappening/>
                <TweetList/>
            </div>
            <div className={"d-sm-none d-md-none d-lg-block d-md-block d-sm-block col-lg-4 col-xl-4"}>
                <PostSummaryList title="What's happening"/>
            </div>
        </div>
    );
};
export default HomeScreen;