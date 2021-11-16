import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import './profile.css';
import {Link} from "react-router-dom";
import profileData from "../../../../data/profile.json";
import {updateCurrentProfile} from "../../../../services/profileService";

const profileState = (state) => state.profile;

const EditProfile = () => {
    const edits = useSelector(profileState);
    let [values, setValues] = useState({
        firstName:profileData.firstName,
        lastName:profileData.lastName,
        handle: edits.handle,
        profilePicture: "../../../images/cat.jpg",
        bannerPicture: "../../../images/banner.jpg",
        bio:profileData.bio,
        website:profileData.website,
        location:profileData.location,
        dateOfBirth:profileData.dateOfBirth,
        dateJoined: edits.dateJoined,
        followingCount: edits.followingCount,
        followersCount: edits.followersCount
    })
    const dispatch = useDispatch();

    const saveEditClickHandler = () => {
        updateCurrentProfile(dispatch, values).then(r => "");
    }

    const exitEditorClickHandler = () => {
        dispatch({
            type: 'exit-editor'
        });
    }

    return (
        <>
            <div className="row">
                <div className="col-1">
                    <Link to="/a8/twitter/profile">
                        <i className="fas fa-times text-white"
                           onClick={exitEditorClickHandler}/>
                    </Link>
                </div>
                <div className="text-white fw-bold col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-8">Edit Profile</div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-2">
                    <Link to="/a8/twitter/profile">
                        <button className="btn btn-black rounded-pill text-nowrap bg-white text-black"
                                onClick={saveEditClickHandler}>
                            <label className="fw-bold text-black">Save</label>
                        </button>
                    </Link>
                </div>
            </div>
            <img src="../../../images/banner.jpg"
                 className="wd-banner-pic mt-2"/>
            <img src="../../../images/cat.jpg"
                 className="rounded-circle wd-profile-pic"/>
            <form className="form-floating">
                <input className="form-control bg-black border-white border-1 text-white mt-3 mb-3"
                       type="text"
                       defaultValue={profileData.firstName}
                       onChange={event => setValues({...values, firstName: event.target.value})}/>
                <label htmlFor="First Name">First Name</label>
            </form>
            <form className="form-floating">
                <input className="form-control bg-black border-white border-1 text-white mt-3 mb-3"
                       type="text"
                       defaultValue={profileData.lastName}
                       onChange={(event) => setValues({...values, lastName: event.target.value})}/>
                <label htmlFor="Last Name">Last Name</label>
            </form>
            <form className="form-floating">
            <textarea className="form-control bg-black border-white border-1 text-white mt-3 mb-3 h-50"
                      defaultValue={profileData.bio}
                      onChange={(event) => setValues({...values, bio: event.target.value})}/>
                <label htmlFor="Bio">Bio</label>
            </form>
            <form className="form-floating">
                <input className="form-control bg-black border-white border-1 text-white mt-3 mb-3"
                       type="text"
                       defaultValue={profileData.location}
                       onChange={(event) => setValues({...values, location: event.target.value})}/>
                <label htmlFor="Location">Location</label>
            </form>
            <form className="form-floating">
                <input className="form-control bg-black border-white border-1 text-white mt-3 mb-3"
                       type="text"
                       defaultValue={profileData.website}
                       onChange={(event) => setValues({...values, website: event.target.value})}/>
                <label htmlFor="Website">Website</label>
            </form>
            <form className="form-floating">
                <input type="date"
                       className="form-control border-white border-1 mt-3 mb-3 bg-black"
                       id="wd-date-color"
                       defaultValue={profileData.dateOfBirth}
                       onChange={(event) => setValues({...values, dateOfBirth: event.target.value})}/>
                <label htmlFor="Date of Birth">Date of Birth</label>
            </form>
        </>
    );
};

export default EditProfile;