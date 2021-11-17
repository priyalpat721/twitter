export const getCurrentProfile = (dispatch) => {

    return fetch('http://localhost:4000/api/profile')
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
    return fetch('http://localhost:4000/api/profile', {
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