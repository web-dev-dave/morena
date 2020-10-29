// Require server
const server = require('./server')

// Create our port variable
const PORT = 3000

// Listen for our server
server.listen(PORT, function () {
  console.log('Server listening on port', PORT)
})