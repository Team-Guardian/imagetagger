const router = require('express').Router();

const targets = require('./targets');
router.use('/targets', targets);

module.exports = router;