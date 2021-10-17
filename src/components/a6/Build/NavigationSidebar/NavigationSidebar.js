import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return (
        <div>
            <div className="nav-bar">
                <ul className="list-group">
                    <Link to="/a6/" className="list-group-item">
                        <a href="/" className="text-white">
                            <i className="fab fa-twitter"/>
                        </a></Link>
                    <Link to="/a6/twitter/home" className={`list-group-item text-white
                          ${active === 'home' ? 'active' :""}`}>
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-home"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Home</label>
                                </div>
                            </div>
                    </Link>

                    <Link to="/a6/twitter/explore" className={`list-group-item text-white
                          ${active === 'explore' ? 'active' :""}`}>
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-hashtag"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Explore</label>
                                </div>
                            </div>
                    </Link>

                    <li className={`list-group-item
                          ${active === 'notifications' ? 'active' :""}`}>
                        <a href="/" className="text-white">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-bell"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Notifications</label>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className={`list-group-item
                          ${active === 'messages' ? 'active' :""}`}>
                        <a href="/" className="text-white">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-envelope"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Messages</label>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className={`list-group-item
                          ${active === 'bookmarks' ? 'active' :""}`}>
                        <a href="/" className="text-white">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-bookmark"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Bookmarks</label>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className={`list-group-item
                          ${active === 'lists' ? 'active' :""}`}>
                        <a href="/" className="text-white">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-list"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Lists</label>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className={`list-group-item
                          ${active === 'profile' ? 'active' :""}`}>
                        <a href="/" className="text-white">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-user"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Profile</label>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className={`list-group-item
                      ${active === 'more' ? 'active' :""}`}>
                        <a href="/" className="text-white">
                            <div className="row">
                                <div className="col-2">
                                    <span className="iconify" data-icon="gridicons:ellipsis-circle"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>More</label>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;
