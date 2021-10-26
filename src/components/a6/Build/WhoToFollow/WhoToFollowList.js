import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";

const WhoToFollowList = ({who}) => {
    return (
            <div>
            <ul className="list-group">
                <li className="list-group-item">Who To Follow</li>
                {
                    who.map((w, key) => {
                        return (
                            <WhoToFollowListItem who={w} key={key}/>
                        );
                    })
                }
            </ul>
                </div>
); }
export default WhoToFollowList;