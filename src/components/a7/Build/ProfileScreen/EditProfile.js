import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import './profile.css';
import {Link} from "react-router-dom";
import profileData from "../../../../data/profile.json";

const profileState = (state) => state.profile;
const profileD = profileData;
const date = profileD.dateOfBirth;
const dateSplit = date.split("/");
const year = dateSplit[2];
let month = '';
if(dateSplit[0].length === 1) {
    month = 0+dateSplit[0];
}
else {
    month = dateSplit[0];
}
const day = parseInt(dateSplit[1]);
const newDate = year+'-'+month+'-'+day;

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
                <div className="text-white fw-bold col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-8">Edit Profile</div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-2">
                    <Link to="/a7/twitter/profile">
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
                   defaultValue={profileD.firstName}
                   onChange={event => setFirstName(event.target.value)}/>
                <label htmlFor="First Name">First Name</label>
            </form>
            <form className="form-floating">
            <input className="form-control bg-black border-white border-1 text-white mt-3 mb-3"
                   type="text"
                   defaultValue={profileD.lastName}
                   onChange={(event) => setLastName(event.target.value)}/>
                <label htmlFor="Last Name">Last Name</label>
            </form>
            <form className="form-floating">
            <textarea className="form-control bg-black border-white border-1 text-white mt-3 mb-3 h-50"
                      defaultValue={profileD.bio}
                      onChange={(event) => setBio(event.target.value)}/>
                <label htmlFor="Bio">Bio</label>
            </form>
            <form className="form-floating">
            <input className="form-control bg-black border-white border-1 text-white mt-3 mb-3"
                   type="text"
                   defaultValue={profileD.location}
                   onChange={(event) => setLocation(event.target.value)}/>
                <label htmlFor="Location">Location</label>
            </form>
            <form className="form-floating">
                <input className="form-control bg-black border-white border-1 text-white mt-3 mb-3"
                       type="text"
                       defaultValue={profileD.website}
                       onChange={(event) => setWebsite(event.target.value)}/>
                <label htmlFor="Website">Website</label>
            </form>
            <form className="form-floating">
                <input type="date"
                       className="form-control border-white border-1 mt-3 mb-3 bg-black"
                       id="wd-date-color"
                       defaultValue={newDate}
                       onChange={(event) => setDateOfBirth(event.target.value)}/>
                <label htmlFor="Date of Birth">Date of Birth</label>
            </form>
        </>
    );
};

export default EditProfile;