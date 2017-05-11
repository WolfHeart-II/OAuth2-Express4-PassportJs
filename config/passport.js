/*
 * Passport.js Settings
 */

// Required Libs
var passport = require('passport');
var OAuth2Strategy = require('passport-oauth2').Strategy;
passport.use(new OAuth2Strategy({
    authorizationURL: 'https://staging-auth.wallstreetdocs.com/oauth/authorize',
    tokenURL: 'https://staging-auth.wallstreetdocs.com/oauth/token',
    clientID: 'coding_test',
    clientSecret: 'bwZm5XC6HTlr3fcdzRnD',
    callbackURL: "http://localhost:3000"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ exampleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


//var FacebookStrategy = require('passport-facebook').Strategy;
//var TwitterStrategy = require('passport-twitter').Strategy;
//var InstagramStrategy = require('passport-instagram').Strategy;
//var GoogleStrategy = require('passport-google-oauth20').Strategy;

// OAuth Settings
//var authConfig = require('./auth');

// Serialize and deserialize user (use on database).
//passport.serializeUser(function(user, done) { done(null, user); });
//passport.deserializeUser(function(user, done) { done(null, user); });

// Facebook Auth
/*passport.use(new FacebookStrategy(authConfig.Facebook,
  function (accessToken, refreshToken, profile, done) {
    // console.log(profile);
    
    var user = {
      id: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      profileURL: profile.profileUrl,
      provider: profile.provider,
      token: accessToken,
      auth: 'Facebook',
      admin: false,
    };

    // console.log(user);
    return done(null, user);
  }
));*/

// Twitter Auth
/*passport.use(new TwitterStrategy(authConfig.Twitter,
  function(accessToken, refreshToken, profile, done) {
    // console.log(profile);

    var user = {
      id: profile.id,
      name: profile.displayName,
      username: profile.username,
      profileURL: 'http://twitter.com/' + profile.username,
      provider: profile.provider,
      token: accessToken,
      auth: 'Twitter',
      admin: false,
    };
    
    // console.log(user);
    return done(null, user);
  }
));*/

// Instaram Auth
/*passport.use(new InstagramStrategy(authConfig.Instagram,
  function(accessToken, refreshToken, profile, done) {
    // console.log(profile);

    var user = {
      id: profile.id,
      name: profile.displayName,
      username: profile.username,
      profileURL: 'http://instagram.com/' + profile.username,
      provider: profile.provider,
      token: accessToken,
      auth: 'Instagram',
      admin: false,
    };

    // console.log(user);
    return done(null, user);
  }
));*/

// Google Auth
/*passport.use(new GoogleStrategy(authConfig.Google,
  function(accessToken, refreshToken, profile, done) {
    // console.log(profile);

    var user = {
      id: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      profileURL: 'http://plus.google.com/',
      provider: profile.provider,
      token: accessToken,
      auth: 'Google',
      admin: false,
    };

    // console.log(user);
    return done(null, user);
  }
));*/

module.exports = passport;