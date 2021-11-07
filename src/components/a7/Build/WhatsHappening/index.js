import React, {useState} from "react";
import "./whatsHappening.css";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        dispatch({type: 'create-tweet',
            tweet: whatsHappening
        });
    }
    return (
        <>
            <table className="wd-table">
                <tr>
                    <td className="wd-table-pic">
                        <img src={'/images/elon.jpg'}
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
            </table>
        </>
    );
}
export default WhatsHappening;
