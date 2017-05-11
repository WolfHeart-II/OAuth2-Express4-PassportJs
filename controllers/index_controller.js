/*
 * Index Controller
 */

// GET Index page action 
exports.index_page = function(req, res, next) {
  if (req.user) {
    res.render('index', {user: req.user});
  }
  else {
    res.render('login');
  }
};

// GET Login page action
exports.login_page = function(req, res, next) {
  res.redirect('/');
};