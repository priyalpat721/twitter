import profileData from "../data/profile.json";

const profileReducer = (state = profileData, action) => {
    switch (action.type) {
        case 'get-profile':
            return (action.profile);

        case 'save8':
            console.log("Actions values: ", action.values);
            return action.values;

        case 'save':
            const profile = {
                "firstName": action.firstName,
                "lastName": action.lastName,
                "handle": "pripat21",
                "profilePicture": action.profilePicture,
                "bannerPicture": action.bannerPicture,
                "bio": action.bio,
                "website": action.website,
                "location": action.location,
                "dateOfBirth": action.dateOfBirth,
                "dateJoined": "11/2021",
                "followingCount": 123,
                "followersCount": 234
            }
            return profile;

        case 'cancel-edit':
            return action;
        case 'exit-editor':
            return action;
        default:
            return state;
    }
}
export default profileReducer;
