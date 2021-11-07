import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import './profile.css';
import {Link} from "react-router-dom";

const profileState = (state) => state.profile;

const EditProfile = () => {
    const edits = useSelector(profileState);

    let [firstName, setFirstName] = useState(edits.firstName);
    let [lastName, setLastName] = useState(edits.lastName);
    let [bio, setBio] = useState(edits.bio);
    let [location, setLocation] = useState(edits.location);
    let [website, setWebsite] = useState(edits.website);
    let [dateOfBirth, setDateOfBirth] = useState(edits.dateOfBirth);

    const dispatch = useDispatch();

    const saveEditClickHandler = () => {
        dispatch({
            type: 'save',
            ...edits,
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth,
            profilePicture: "../../../images/cat.jpg",
            bannerPicture: "../../../images/banner.jpg",
        });
        dispatch({
            type: 'cancel-edit'
        });
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
                    <Link to="/a7/twitter/profile">
                        <i className="fas fa-times text-white"
                           onClick={exitEditorClickHandler}/>
                    </Link>
                </div>
                <div className="text-white fw-bold col-xxl-9 col-xl-8 col-lg-8 col-md-7 col-sm-6">Edit Profile</div>
                <div className="col-xxl-2 col-xl-4 col-lg-4 col-md-5 col-sm-5 mt-2">
                    <Link to="/a7/twitter/profile">
                        <button className="btn btn-black rounded-pill border-white text-nowrap"
                                onClick={saveEditClickHandler}>
                            <label className="fw-bold text-white">Save</label>
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
                   value={firstName}
                   onChange={(event) => setFirstName(event.target.value)}/>
                <label htmlFor="First Name">First Name</label>
            </form>
            <form className="form-floating">
            <input className="form-control bg-black border-white border-1 text-white mt-3 mb-3"
                   type="text"
                   value={lastName}
                   onChange={(event) => setLastName(event.target.value)}/>
                <label htmlFor="Last Name">Last Name</label>
            </form>
            <form className="form-floating">
            <textarea className="form-control bg-black border-white border-1 text-white mt-3 mb-3 h-50"
                      value={bio}
                      onChange={(event) => setBio(event.target.value)}/>
                <label htmlFor="Bio">Bio</label>
            </form>
            <form className="form-floating">
            <input className="form-control bg-black border-white border-1 text-white mt-3 mb-3"
                   type="text"
                   value={location}
                   onChange={(event) => setLocation(event.target.value)}/>
                <label htmlFor="Location">Location</label>
            </form>
            <form className="form-floating">
                <input className="form-control bg-black border-white border-1 text-white mt-3 mb-3"
                       type="text"
                       value={website}
                       onChange={(event) => setWebsite(event.target.value)}/>
                <label htmlFor="Website">Website</label>
            </form>
            <form className="form-floating">
                <input type="date"
                       className="form-control border-white border-1 mt-3 mb-3 bg-black"
                       id="wd-date-color"
                       value={dateOfBirth}
                       onChange={(event) => setDateOfBirth(event.target.value)}/>
                <label htmlFor="Date of Birth">Date of Birth</label>
            </form>
        </>
    );
};

export default EditProfile;