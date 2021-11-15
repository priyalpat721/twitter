import React from "react";
import './profile.css';
import {useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";

const profileState = (state) => state.profile;

const Profile = () => {
    const p = useSelector(profileState);
    return <ProfileItem profile={p}/>

};
export default Profile;