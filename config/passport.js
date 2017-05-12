// Author - Laércio S Bezerra | laerciosouza@lavid.ufpb.br

/*
 * Passport.js Settings
 */

// Required Libs


var OAuth2Strategy = require('passport-oauth2'),
    LocalStrategy = require('passport-local').Strategy,
    OAuth2RefreshTokenStrategy = require('passport-oauth2-middleware').Strategy,
    passport = require('passport');
/*var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var InstagramStrategy = require('passport-instagram').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;*/

// OAuth Settings
var authConfig = require('./auth');


var refreshStrategy = new OAuth2RefreshTokenStrategy({
  refreshWindow: 10, // Time in seconds to perform a token refresh before it expires
  userProperty: 'ticket', // Active user property name to store OAuth tokens
  authenticationURL: '/login', // URL to redirect unathorized users to
  callbackParameter: 'callback' //URL query parameter name to pass a return URL
});

passport.use('main', refreshStrategy);  //Main authorization strategy that authenticates
                                        //user with store OAuth access token
                                        //and performs a tokne refresh when needed

var oauthStartegy = new OAuth2Strategy(authConfig.OAuth2,
  refreshStrategy.getOAuth2StrategyCallback() //Create a callback for OAuth2Strategy
);

passport.use('oauth', oauthStartegy); //Strategy to perform regular OAuth2 code grant workflow
refreshStrategy.useOAuth2Strategy(oauthStartegy); //Register the OAuth strategy
                                                  //to perform OAuth2 refresh token workflow

var localStrategy = new LocalStrategy({
  usernameField : 'username',
  passwordField : 'password',
  passReqToCallBack : true
},
  refreshStrategy.getLocalStrategyCallback() //Create a callback for LocalStrategy
);

passport.use('local', localStrategy); //Strategy to perform a username/password login
refreshStrategy.useLocalStrategy(localStrategy); //Register the LocalStrategy
                                                 //to perform an OAuth 'password' workflow


module.exports = passport;