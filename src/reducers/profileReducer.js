import profileData from "../data/profile.json";

const profileReducer = (state = profileData, action) => {
    switch (action.type) {
        case 'get-profile':
            return (action.profile[0]);

        case 'save':
            const profile = {
                "firstName": action.firstName,
                "lastName": action.lastName,
                "bio": action.bio,
                "location": action.location,
                "website": action.website,
                "dateOfBirth": action.dateOfBirth,
                "profilePicture": action.profilePicture,
                "bannerPicture": action.bannerPicture,
                "handle": "pripat21",
                "dateJoined": "11/2021",
                "followingCount": 123,
                "followersCount": 234
            }
            return profile;

        case 'cancel-edit':
            return state;
        case 'exit-editor':
            return state;
        default:
            return state;
    }
}
export default profileReducer;
