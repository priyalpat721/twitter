import React from "react";
import './tweet.css';
import TweetStats from "./TweetStats";
import {useDispatch} from "react-redux";
import {deleteTweet} from "../../../../services/tweetService";

const TweetListItem = ({tweet}) => {
    const dispatch = useDispatch();
    const deleteTweetClickHandler = () => {
        deleteTweet(dispatch, tweet).then(r => "");
    }
    return(
        <li className="list-group-item">
            <table>
                <tbody>
                    <tr>
                        <td className="align-text-top">
                            <img className="rounded-circle wd-avatar-image"
                                 src={tweet['logo-image']}/>
                        </td>
                        <td className="ps-3" style={{width: '100%'}}>

                            <i onClick={deleteTweetClickHandler} className="fas fa-times fa-pull-right"/>
                            <span className="fw-bold">{tweet.userName}</span>
                            {tweet.verified && <i className="ms-1 fas fa-check-circle"/>}
                            <span className="ms-1 text-secondary">@{tweet.handle}</span>
                            <div>
                                {tweet.tweet}
                            </div>
                            {
                                tweet.attachments && tweet.attachments.image &&
                                <img src={tweet.attachments.image}
                                     className="mt-2 wd-border-radius-20px w-100"/>
                            }
                            {
                                tweet.attachments && tweet.attachments.video &&
                                <iframe width="100%" height="350px"
                                        className="mt-2 wd-border-radius-20px w-100"
                                        src={`https://www.youtube.com/embed/${tweet.attachments.video}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            }
                            {/*{JSON.stringify(tweet)}*/}
                            <TweetStats tweet={tweet}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

export default TweetListItem;