const { createsong, deletesong } = require('../controllers/song.controller');
const router = require('express').Router();

router.post('/',createsong);

router.delete('/', deletesong);

module.exports = router;