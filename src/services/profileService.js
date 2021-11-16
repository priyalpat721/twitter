import React from 'react';


export const getCurrentProfile = (dispatch) => {

    return fetch('http://localhost:4000/api/profile')
        .then((response) =>
            response.json())
        .then((profile) => {

            dispatch({
                type: 'get-profile',
                profile: profile
            })
        });
}

export const updateCurrentProfile = () => {
    return fetch('http://localhost:4000/api/profile')
        .then((response) => {
            response.json().then();
        })
}