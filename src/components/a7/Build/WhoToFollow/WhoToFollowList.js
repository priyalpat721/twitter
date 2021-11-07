import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import {useSelector} from "react-redux";

const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectAllWho);
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
    );
}
export default WhoToFollowList;