// const URL = 'http://localhost:4000/api/tweets';
const URL = 'https://web-dev-node-pripat.herokuapp.com/api/tweets';
export const findAllTweets = (dispatch) =>
    fetch(URL)
        .then(response => response.json())
        .then(tweets =>
            dispatch({
                type: 'fetch-all-tweets',
                tweets
            }));

export const deleteTweet = (dispatch, tweet) =>
    fetch(`${URL}/${tweet.id}`, {
        method: 'DELETE',
    }).then(response => dispatch({
        type: 'delete-tweet',
        tweet
    }));

export const createTweet = (dispatch, tweet, newTweet) => {
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                    type: 'create-tweet9',
                    tweet,
                    newTweet
                }
            )
        );
}

export const likeTweet = (dispatch, tweet) =>
    fetch(`${URL}/${tweet._id}`, {
        method: 'PUT',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(() =>
            dispatch({
                type: 'like-tweet',
                tweet
            }));

export default {
    findAllTweets,
    deleteTweet,
    createTweet,
    likeTweet
};