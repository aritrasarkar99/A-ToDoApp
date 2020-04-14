const express = require('express')
const router = express.Router()

const ListController = require('../controllers/List')

router.get('/',ListController.getIndex);
router.post('/todo', ListController.postIndex);
router.get('/todo/:itemId',ListController.deleteIndex);

module.exports = router