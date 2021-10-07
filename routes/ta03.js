//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const ta03 = require('../controllers/ta03')

router.get('/', ta03.getIndex);

router.get('/:tag', ta03.getIndex)

router.post('/', ta03.postIndex);

module.exports = router;
