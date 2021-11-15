import React from 'react';

export const getCurrentProfile = () => {
    return fetch('http://localhost:4000/api/profile')
        .then((response) => {
            response.json().then("");
        })
}

