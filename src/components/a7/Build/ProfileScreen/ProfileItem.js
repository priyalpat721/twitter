import React, {useState} from "react";
import './profile.css';
import {Link} from "react-router-dom";


const ProfileItem = ({profile}) => {
    let avatar = profile.profilePicture;
    let banner = profile.bannerPicture;
    let joined = profile.dateJoined;

    return (
        <div>
            <div className="mb-4">
                <div className="row">
                   <div className="col-1">
                       <Link to="/a7/twitter/home">
                           <i className="fas fa-arrow-left col-1 pt-2 text-white"/>
                       </Link>
                   </div>
                    <div className="col-10">
                        <div className="h5">{profile.firstName} {profile.lastName}</div>
                        <div className="wd-normal">5196 Tweets</div>
                    </div>


                </div>
                <img src={banner}
                     className="wd-banner-pic"/>

                <div className="ms-3">
                    <div className="row">
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-8">
                            <img src={avatar}
                                 className="rounded-circle wd-profile-pic"/>

                            <div className="text-white h5">{profile.firstName} {profile.lastName}
                                <div className="text-dark h6">@{profile.handle}</div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-2">
                            <Link to="/a7/twitter/editProfile">
                                <button className="btn btn-black rounded-pill border-white text-nowrap">
                                    <label className="fw-bold text-white">Edit Profile</label>
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="text-white mt-2 mb-2">
                        {profile.bio}
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <i className="fas fa-map-marker-alt me-1" aria-hidden="true"/>
                            <label className="me-3">{profile.location}</label>

                            <i className="fas fa-birthday-cake me-1" aria-hidden="true"/>
                            <label>Born {profile.dateOfBirth}
                            </label>

                            <i className="far fa-calendar-alt ms-3"/>
                            <label className="ms-1">
                                Joined {joined}
                            </label>
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                    <div>
                <span className="me-4">
                    <label className="fw-bold me-1 text-white">
                        {profile.followingCount}
                    </label>
                    <label>
                        Following
                    </label>
                </span>
                        <span>
                    <label className="fw-bold me-1 text-white">
                        {profile.followersCount}
                    </label>
                    <label>
                        Followers
                    </label>
                </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileItem;