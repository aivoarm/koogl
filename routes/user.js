
/*
 * GET home page.
 */

module.exports = function(app) {
    app.get('/user', function(req, res){
      res.render('user')
    });
};