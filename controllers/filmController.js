const filmService = require('../services/filmService');

module.exports.getById = async (req, res) => {
    const response = { status: 500, message: 'Server error'};

    try {
        const filmId = req.params.id;
        const responseFromService = await filmService.getById(filmId)

        if (responseFromService.status) {
            if (responseFromService.result) {
                response.status = 200
                response.message = 'Film fetched successfully'
                response.result = responseFromService.result
            } else {
                response.message = `Film not found`
                response.status = 404
            }
        }
    } catch (err) {
        console.error('[ERROR filmControllerGetById', err)
    }
    res.status(response.status).send(response)
}