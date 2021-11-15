let profile = require('../data/profile.json');

module.exports = (app) => {
    const getCurrentProfile = (req, res) => res.json(profile);

    const updateCurrentProfile = (req, res) => {
        const editProfile = req.body;
        const profileId = req.params['mid'];
        profile = profile.map(prof =>
            prof._id === profileId ? editProfile : prof);
        res.json(profile);
    }

    app.get('/api/profile', getCurrentProfile);
    app.put('/api/profile/:mid', updateCurrentProfile);
}

