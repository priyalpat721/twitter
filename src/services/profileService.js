const PROFILE_API = 'http://localhost:4000/api/profile';
export const getCurrentProfile = (dispatch, profile) => {

    return fetch(PROFILE_API)
        .then((response) =>
            response.json())
        .then((profile) => {

            dispatch({
                type: 'get-profile',
                profile: profile
            })
        }).then(() => console.log("Profile object current: ", profile));
}

export const updateCurrentProfile = (dispatch, values) => {
    return fetch('http://localhost:4000/api/profile/edit', {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response =>
            dispatch({
                type: 'save8',
                values

            }))
        .then(r => console.log("values in the updated current profile method: ", values));
}