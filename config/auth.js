// Author - Laércio S Bezerra | laerciosouza@lavid.ufpb.br

/*
 * OAuth Authentication Settings
 */


var host = 'http://localhost:3000';

// Required Keys to use OAuth authentication
module.exports = {
  Facebook : {
    clientID: 'coding_test',
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: host + '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']
  },
  Twitter : {
    clientID: 'coding_test',
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: host + '/auth/twitter/callback'
  },
  Instagram : {
    clientID: 'coding_test',
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    callbackURL: host + '/auth/instagram/callback',
  },
  Google : {
    clientID: 'coding_test',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: host + '/auth/google/callback'
  },
  OAuth2 : {
    authorizationURL: 'https://staging-auth.wallstreetdocs.com/oauth/authorize',
    tokenURL: 'https://staging-auth.wallstreetdocs.com/oauth/token',
    clientID: 'coding_test',
    clientSecret: 'bwZm5XC6HTlr3fcdzRnD',
    callbackURL: "http://localhost:3000",
    passReqToCallback : false //Must be omitted or set to false in order to work with OAuth2RefreshTokenStrategy
  }
};
