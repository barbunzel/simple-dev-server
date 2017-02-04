const express = require('express');
const router = express.Router();
const core = require('../controllers/core.js');

router.route('*').get(core.renderIndex);

module.exports = router;