// Author - Laércio S Bezerra | laerciosouza@lavid.ufpb.br

/*
 * OAuth Authentication Controller
 */

// Required Lib
var passport = require('../config/passport');

// GET Facebook resource action
exports.facebook = passport.authenticate('facebook');

// GET Facebook callback action
exports.callback_facebook = passport.authenticate('facebook', {
  successRedirect : '/',
  failureRedirect : '/login'
});

// GET Twitter resource action
exports.twitter = passport.authenticate('twitter');

// GET Twitter callback action
exports.callback_twitter = passport.authenticate('twitter', {
  successRedirect : '/',
  failureRedirect : '/login'
});

// GET Instagram resource action
exports.instagram = passport.authenticate('instagram');

// GET Instagram callback action
exports.callback_instagram = passport.authenticate('instagram', {
  successRedirect : '/',
  failureRedirect : '/login'
});

// GET Google resource action
exports.google = passport.authenticate('google', {scope: ['profile', 'email']});

// GET Google callback action
exports.callback_google = passport.authenticate('google', {
  successRedirect : '/',
  failureRedirect : '/login'
});

// GET OAuth2 resource action
exports.oauth2 = passport.authenticate('oauth2');

// GET OAuth2 callback action
exports.callback_oauth2 = passport.authenticate('oauth2', {
  successRedirect : '/',
  failureRedirect : '/login',
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }  
});

// GET Sign out action
exports.logout = function(req, res, next) {
  req.logout();
  res.redirect('/');
};