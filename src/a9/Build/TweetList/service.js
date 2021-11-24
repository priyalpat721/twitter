const URL = 'http://localhost:4000/rest/tweets';
//const URL = 'https://web-dev-node-pripat.herokuapp.com/api/tweets';
export const findAllTweets = (dispatch) =>
    fetch(URL)
        .then(response => response.json())
        .then(tweets =>
            dispatch({
                type: 'fetch-all-tweets',
                tweets
            }));

export const deleteTweet = (dispatch, tweet) =>
    fetch(`${URL}/${tweet._id}`, {
        method: 'DELETE',
    }).then(response => dispatch({
        type: 'delete-tweet',
        tweet
    }));

export const createTweet = (dispatch, newTweet) => {
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                    type: 'create-tweet9',
                    tweet: tweet
                }
            )
        );
}

export const likeTweet = (dispatch, tweet) =>
    fetch(URL +`/${tweet._id}`+`/like`, {
        method: 'PUT',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(() =>
            dispatch({
                type: 'like-tweet9',
                tweet
            }));

export default {
    findAllTweets,
    deleteTweet,
    createTweet,
    likeTweet
};