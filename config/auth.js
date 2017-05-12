// Author - Laércio S Bezerra | laerciosouza@lavid.ufpb.br

/*
 * OAuth Authentication Settings
 */


var host = 'http://localhost:3000';

// Required Keys to use OAuth authentication
module.exports = {
  OAuth2 : {
    authorizationURL: 'https://staging-auth.wallstreetdocs.com/oauth/authorize',
    tokenURL: 'https://staging-auth.wallstreetdocs.com/oauth/token',
    clientID: 'coding_test',
    clientSecret: 'bwZm5XC6HTlr3fcdzRnD',
    callbackURL: "http://localhost:3000",
    passReqToCallback : true //Must be omitted or set to false in order to work with OAuth2RefreshTokenStrategy
  }
};
