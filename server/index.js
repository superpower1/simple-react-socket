const io = require('socket.io')();
const port = 3168;

io.on('connection', client => {
  client.on('subscribeToTimer', interval => {
    setInterval(()=>{
      client.emit('timer', new Date())
    }, interval)
  })
})

io.listen(port);
console.log('Server listening on port', port);
