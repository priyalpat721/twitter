const PROFILE_API = 'https://web-dev-node-pripat.herokuapp.com/api/profile';
//const PROFILE_API = 'http://localhost:4000/api/profile';

export const getCurrentProfile = (dispatch) => {

    return fetch(PROFILE_API)
        .then((response) =>
            response.json())
        .then((profile) => {

            dispatch({
                type: 'get-profile',
                profile
            })
        });
}

export const updateCurrentProfile = (dispatch, values) => {
    return fetch(PROFILE_API, {
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

            }));
}