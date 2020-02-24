const express = require('express');
const router = express.Router();

router.use('/', require('./views/transition-check/routes'));

module.exports = router;
