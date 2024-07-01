const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Import cors
const StreamService = require('./streamdata');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:5173", // Update to your React client origin
        methods: ["GET", "POST"]
    }
});

// Use cors middleware
app.use(cors({
    origin: "http://localhost:5173" // Update to your React client origin
}));

// Set up the stream service
const streamService = new StreamService('http://localhost:3000/stream');

streamService.on('data', (data) => {
    // Broadcast data to all connected clients
    io.emit('newData', data);
});

io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
