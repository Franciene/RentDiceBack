var express = require('express');
var router = express.Router();
const UsersController = require('../controllers/UsersControlles');

router.post('/', UsersController.insertUser);
router.post('/login', UsersController.login);


module.exports = router;
