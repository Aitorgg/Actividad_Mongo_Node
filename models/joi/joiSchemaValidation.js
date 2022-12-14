const Joi = require("joi");
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.validate = (schema, validation) => {
    return (req, res, next) => {
    let objToValidate = {}
    if (validation === 'body') objToValidate = req.body
    else if (validation === 'query') objToValidate = req.query
    else if (validation === 'path') objToValidate = req.params

    const result = schema.validate(objToValidate);
    console.log(result.error);


    if (result.error) {
        const errorDetails = result.error.details.map(value => value.message)
        const responseObj = {
            status: 400,
            body: errorDetails
        }
        return res.status(responseObj.status).send(responseObj)
    }
    else next()
    }
}