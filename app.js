const express = require('express'),
        app = express(),
        http = require('http'),
        server = http.createServer(app),
        { Server } = require('socket.io'),
        io = new Server(server);

//Setup
require('dotenv').config()

app.use(express.static('public'))
app.set('view engine', 'ejs')

//Load Routes
const indexRoutes = require('./routes/index')

app.use(indexRoutes)

io.on('connection', (socket)=> {
        console.log('A user connected');
    
        socket.on('disconnect', () => {
            console.log('user disconnected')
        });
    });

server.listen(process.env.PORT, ()=>{
    console.log('Server is running in ' + process.env.NODE_ENV + ' on port ' + process.env.PORT); })