const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index, show, store, update, destroy

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });
        
        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }
        return response.json(dev);
    },

    async update(request, response) {
        /* const github_username = request.params.github_username;
        const {latitude, longitude, techs } = request.body;
      
        const techsArray = parseStringAsArray(techs);

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        let dev = await Dev.findOne({ github_username });

        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

        const { name = login, avatar_url, bio } = apiResponse.data;

        dev = await Dev.updateOne({ github_username }, {
            $set: {
                techs: techsArray,
                location,
                name,
                avatar_url,
                bio
            }
        }, (err, res) => {
            if (err)
                return res.send(err)
            else
                return response.json(dev);
        });
 */
    },

    async destroy() {

    }
};