const { createplaylist } = require('../controllers/playlist.controller');
const router = require('express').Router();

router.post('/', createplaylist);


module.exports = router;