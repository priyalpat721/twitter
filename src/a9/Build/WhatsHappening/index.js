import React, {useState} from "react";
import "./whatsHappening.css";
import {useDispatch} from "react-redux";
import service from "../TweetList/service";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        const newTweet = {
            topic: "Web Development",
            userName: "ReactJS",
            verified: false,
            handle: "ReactJS",
            title: "New tweet just posted",
            tweet: whatsHappening,
            time: "2h",
            "logo-image": "../../../images/react.png",
            "avatar-image": "../../../images/react.png",
            stats: {
                comments: 123,
                retweets: 234,
                likes: 345
            },
            liked: false
        }

        service.createTweet(dispatch, newTweet);

    }
    return (
        <>
            <table className="wd-table">
                <tbody>
                    <tr>
                        <td className="wd-table-pic">
                            <img src={'/images/react.png'}
                                 className="rounded-circle wd-image"/>
                        </td>
                        <td className="w-100">
                                    <textarea value={whatsHappening}
                                              onChange={(event) => setWhatsHappening(event.target.value)}
                                              className="form-control wd-form-wh bg-black text-white"
                                              placeholder="What's happening?"/>
                            <hr/>
                            <span>
                                        <a href="#"><i className="far fa-image me-3"/></a>
                                        <a href="#"><i className="fas fa-chart-line me-3"/></a>
                                        <a href="#"><i className="far fa-smile me-3"/></a>
                                        <a href="#"><i className="far fa-calendar me-3"/></a>
                                    </span>
                            <button onClick={tweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                                Tweet
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default WhatsHappening;
