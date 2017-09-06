var socket = io();

socket.on('connect', function() {
    console.log('connected to server');
    socket.emit('createMessage', {
        from: 'gandalf',
        text: 'Howdy ranchers'
    });
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage detected:', message);
});