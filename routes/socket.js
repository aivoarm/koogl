/*
 * GET home page.
 */
 
module.exports = function(app) {

    app.get('/socket', function(req, res){
       res.render('socket', { title: 'my Express' })
    });
    
    app.get('/stream', function(req, res){
         res.render('stream');
    });
    
var io  = module.exports = require("socket.io").listen(app)
    
   var ss = require('socket.io-stream'); 
   var fs = require('fs'); 
   
   
    // usernames which are currently connected to the chat
var usernames = {};

io.sockets.on('connection', function (socket) {

    console.log("Connection " + socket.id + " accepted.");
    
	// now that we have our connected 'socket' object, we can 
    // define its event handlers

   
    

	// when the client emits 'sendchat', this listens and executes
	socket.on('sendchat', function (data) {
		// we tell the client to execute 'updatechat' with 2 parameters
		io.sockets.emit('updatechat', socket.username, data);
		
	});

	// when the client emits 'adduser', this listens and executes
	socket.on('adduser', function(username){
	    console.log(username);
		// we store the username in the socket session for this client
		socket.username = username;
		// add the client's username to the global list
		usernames[username] = username;
		// echo to client they've connected
		socket.emit('updatechat', username,  'has connected');
		// echo globally (all clients) that a person has connected
		socket.broadcast.emit('updatechat', username,  'has connected');
		// update the list of users in chat, client-side
		io.sockets.emit('updateusers', usernames);
		
		
	});
   
		
    socket.on('disconnect', function (usernames) {
                console.log("Connection " + socket.id + " terminated.");

       	// remove the username from global usernames list
    	if(usernames[socket.username]!=null){delete usernames[socket.username];}
		// update list of users in chat, client-side
		io.sockets.emit('updateusers', usernames);
		// echo globally that this client has left
		socket.broadcast.emit('updatechat',  socket.username , ' has disconnected');
       
   
	// when the user disconnects.. perform this
    })
    
     socket.on('reconnect', function (d) {console.log(d)
        	socket.broadcast.emit('updatechat', socket.username,  'has connected');
     });
     
     ss(socket).on('data', function(stream, data) {
     // var filename = path.basename(data.name);
        
        stream.pipe(fs.createWriteStream('foo.txt',  { flags : 'w' }) );
        console.log(stream._end)
  });
     
     

});



};




