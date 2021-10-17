import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
            <ul className="list-group">
                {
                    who.map(w => {
                        return (
                            <WhoToFollowListItem who={w}/>
                        );
                    })
                }
            </ul>
); }
export default WhoToFollowList;