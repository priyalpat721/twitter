import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";

const WhoToFollowList = ({who}) => {
    return (
            <ul className="list-group">
                {
                    who.map((w, key) => {
                        return (
                            <WhoToFollowListItem who={w} key={key}/>
                        );
                    })
                }
            </ul>
); }
export default WhoToFollowList;