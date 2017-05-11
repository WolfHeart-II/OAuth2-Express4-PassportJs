var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/auth_controller');

/*
  AUTH ACTIONS TO ANGULARJS CONSUME.
*/

router

  // AUTH ACTIONS
  /* GET OAuth authentication. */
  .get('/oauth2', auth_controller.oauth2)

  /* GET OAuth2 callback for authentication. */
  .get('/oauth2/callback', auth_controller.callback_oauth2)

  /* GET OAuth Facebook authentication. */
  //.get('/facebook', auth_controller.facebook)

  /* GET OAuth callback for Facebook authentication. */
  //.get('/facebook/callback', auth_controller.callback_facebook)

  /* GET OAuth Twitter authentication. */
  //.get('/twitter', auth_controller.twitter)

  /* GET OAuth callback for Twitter authentication. */
  //.get('/twitter/callback', auth_controller.callback_twitter)

  /* GET OAuth Instagram authentication. */
  //.get('/instagram', auth_controller.instagram)

  /* GET OAuth callback for Instagram authentication. */
  //.get('/instagram/callback', auth_controller.callback_instagram)

  /* GET OAuth Google authentication. */
  //.get('/google', auth_controller.google)

  /* GET OAuth callback for Google authentication. */
  //.get('/google/callback', auth_controller.callback_google)

  /* GET to Logout session account. */
  .get('/logout', auth_controller.logout);

module.exports = router;