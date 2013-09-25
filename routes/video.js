module.exports = function(app) {
    app.get('/video_recorder', function(req, res){
       res.render('video')
    });
    
}