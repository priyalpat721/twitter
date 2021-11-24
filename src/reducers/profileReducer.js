import profileData from "../data/profile.json";

const profileReducer = (state = profileData, action) => {
    switch (action.type) {
        case 'get-profile':
            return (action.profile);

        case 'get-profile9':
            return (action.profile[0]);

        case 'save8':
            return action.values;

        case 'save':
            const profile = [{
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
            }]
            return profile;

        case 'cancel-edit':
            return state;
        case 'exit-editor':
            return action.values;
        case 'exit-editor7':
            return state;
        default:
            return state;
    }
}
export default profileReducer;
