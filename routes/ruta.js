const express = require('express');
const router = express.Router();
const schema = require('../models/joi/filmSchema').filmId;
const schemaVal = require('../models/joi/joiSchemaValidation');
const cont = require('../controllers/filmController');

router.get('/films/:id',schemaVal.validate(schema, 'path'), cont.getById);

module.exports = router;