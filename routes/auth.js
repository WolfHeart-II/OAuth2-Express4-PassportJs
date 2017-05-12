// Author - Laércio S Bezerra | laerciosouza@lavid.ufpb.br

var express = require('express');
var passport = require('../config/passport');
var router = express.Router();
var auth_controller = require('../controllers/auth_controller');
var index_controller = require('../controllers/index_controller');

/*
  AUTH ACTIONS TO ANGULARJS CONSUME.
*/

router

  // AUTH ACTIONS

  /* GET OAuth Facebook authentication. */
  .get('/facebook', auth_controller.facebook)

  /* GET OAuth callback for Facebook authentication. */
  .get('/facebook/callback', auth_controller.callback_facebook)

  /* GET OAuth Twitter authentication. */
  .get('/twitter', auth_controller.twitter)

  /* GET OAuth callback for Twitter authentication. */
  .get('/twitter/callback', auth_controller.callback_twitter)

  /* GET OAuth Instagram authentication. */
  .get('/instagram', auth_controller.instagram)

  /* GET OAuth callback for Instagram authentication. */
  .get('/instagram/callback', auth_controller.callback_instagram)

  /* GET OAuth Google authentication. */
  .get('/google', auth_controller.google)

  /* GET OAuth callback for Google authentication. */
  .get('/google/callback', auth_controller.callback_google)

  //GET /login
  /*.get('/login', function(req, res){
    var callback = req.query.callback || '/';

    if (req.isAuthenticated()) {
      return res.redirect(callback);
    }

    res.render('login_page');
  })*/

  //POST /login
  .post('/login', auth_controller.authenticate)  
  /*.post('/login', function(req, res, next) {
   var callback = req.query.callback || '/profile';
   passport.authenticate('local', function(err, user, info) {
     if (err || !user) {
       res.render('login_page', {
         error: info ? info.message : 'Unable to login.',
         username: req.body.username
       });
       return next();
     }

     req.logIn(user, function(err) {
       if (err) {
         return next(err);
       }

       return res.redirect(callback);
     });
   })(req, res, next);
  })*/

  //GET /oauth
  .get('/oauth', passport.authenticate('oauth'))

  //GET /oauth/callback
  .get('/oauth/callback', passport.authenticate('oauth'), function(req, res) {
    res.redirect('/profile');
  })

  //GET /profile
  .get('/profile',
  passport.authenticate('main'), function(req, res) {
   res.render('profile_page');
  })

  //GET /api/data
  .get('/api/data',
  passport.authenticate('main', {
    noredirect: true //Don't redirect a user to the authentication page, just show an error
  }), function(req, res) {
    res.render('profile_page');
  })
  .get('/api/data',
  passport.authenticate('main', {
    noredirect: true //Don't redirect a user to the authentication page, just show an error
  }), function(req, res) {
    res.render('profile_page');
  })

  /* GET to Logout session account. */
  .get('/logout', auth_controller.logout);

  

module.exports = router;