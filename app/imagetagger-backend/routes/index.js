const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

const api = require('./api');
router.use('/api', api);

module.exports = router;