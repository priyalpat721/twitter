const URL = 'http://localhost:4000/rest/profile';
//const URL = 'https://web-dev-node-pripat.herokuapp.com/rest/profile';

export const findProfileById = (dispatch) =>
    fetch(URL)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'get-profile9',
                profile
            }));


export const updateProfile = (dispatch, values) =>
    fetch(URL+`/6195e88466888af9ff79dd47`, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(response =>
        dispatch({

            type: 'save8',
            values
        }));

export default {
    findProfileById,
    updateProfile
};