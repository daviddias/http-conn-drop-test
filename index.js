var request = require('request')
var randomWord = require('random-word')

function requinator (path) {
  var options = {}
  options.headers = {}
  options.path = path || ('/' + randomWord() + randomWord())
  options.url = 'https://liftsecurity.io' + options.path
  options.followedirect = false
  // options.pool = false // same as setting agent: false in http node lib
  options.method = 'GET'

  request(options, push)

  function push (error, res, body) {
    if (error) {
      console.log('ERROR: ', error)
      process.exit()
      return
    }
    return console.log(options.path, res.statusCode)
  }
}

for (var i = 0; i < 100; i++) {
  requinator()
  if (i === 10) {
    requinator('/js/')
  }
}

