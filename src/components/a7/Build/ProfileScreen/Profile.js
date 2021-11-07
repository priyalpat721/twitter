import React from "react";
import './profile.css';
import {useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";

const profileState = (state) => state.profile;

const Profile = () => {
    const p = useSelector(profileState);
    return (
        <>
            {
                p.map((profile, key) =>
                    <ProfileItem profile={profile} key={key}/>
                )
            }
        </>
    );
};
export default Profile;