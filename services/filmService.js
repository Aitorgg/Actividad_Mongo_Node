const { default: mongoose } = require('mongoose');
const Film = require('../models/db/filmModel');
const repository = require('../db/repository');

module.exports.getById = async (filmId) => {
    const responseObj = { status: false };
    try {
        const data = {
            model: Film,
            _id: mongoose.Types.ObjectId(filmId)
        };
        const responseFromRepository = await repository.getById(data);
        if (responseFromRepository.status) {
            return responseFromRepository;
        }
    } catch (err) {
        console.error('[ERROR FilmService-getById]', err);
        return responseObj;
    }
}