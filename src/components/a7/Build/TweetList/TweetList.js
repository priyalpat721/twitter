import React from "react";
import {useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";

const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
    const t = useSelector(selectAllTweets);
    return(
        <ul className="list-group">
            {
                t.map((tweet, key) =>
                    <TweetListItem tweet={tweet} key={key}/>
                )
            }
        </ul>
    )
};

export default TweetList;