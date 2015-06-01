var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    path = require('path'),
    io = require('socket.io')(http),
    socket = require('./server/socket');

app.set('views', path.join(__dirname, '/client'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '/client/public')));

app.get('/', function(req, res){
  res.render('index');
});

io.on('connection', socket);

http.listen(3000, function(){
  console.log('Server running...');
});