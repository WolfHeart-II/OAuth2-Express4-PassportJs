// Author - Laércio S Bezerra | laerciosouza@lavid.ufpb.br

/*
 * OAuth Authentication Controller
 */

// Required Lib
var passport = require('../config/passport');

// GET OAuth2 resource action
/*exports.oauth2 = passport.authenticate('oauth2');

// GET OAuth2 callback action
exports.callback_oauth2 = passport.authenticate('oauth2', {
  successRedirect : '/',
  failureRedirect : '/login',
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }  
});*/

/*exports.login = function(req, res, next) {
  alert('hi');
};*/

exports.authenticate = function(req, res, next){
    console.log('Login request!');

    passport.authenticate('local', function(err, user, info) {

        console.log('In authenticate callback!' + "\nReq:" + req + "\nError:" + JSON.stringify(err) + "\nUser:" + JSON.stringify(user) + "\nInfo:" + JSON.stringify(info));
        if (err) return next(err);

        if (!user) {
          req.flash('errors', { msg: info.message });
          res.status(500).json({message: info.message});
        }
        res.json(user);

        /*passport.authenticate('local', {
          successRedirect : '/',
          failureRedirect : '/login',
          function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
          }  
        });*/
        
      
      })(req, res, next);
}

// GET Sign out action
exports.logout = function(req, res, next) {
  debugger;
  req.logout();
  res.redirect('/');
};