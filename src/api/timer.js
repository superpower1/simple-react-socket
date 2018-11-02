import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3168')

export const subscribeToTimer = (callback) => {
  // Note that we subscribe to the timer event on the socket, before we emit the subscribeToTimer event. We did this in case we run into a race condition where timer events are being emitted from the server, but the client hasn’t shown it’s interest in it yet, causing events to go missing.
  socket.on('timer', timestamp => callback(null, timestamp))
  socket.emit('subscribeToTimer', 1000)
}
