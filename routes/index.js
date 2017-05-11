var express = require('express');
var router = express.Router();
var index_controller = require('../controllers/index_controller');

/*
  SIGN OUT PAGES ACTIONS TO ANGULARJS CONSUME.
*/

router

  // LOG OUT ACTIONS

  /* GET index page. */
  .get('/', index_controller.index_page)

  /* GET login page. */
  .get('/login', index_controller.login_page)
  
module.exports = router;