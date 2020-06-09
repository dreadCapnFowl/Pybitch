var Pyth = require('./pyth.js')
var py = new Pyth();

py.run('./test.py')

py.on('json', (json) => {
  console.log(json)
})

py.on('text', (text) => {
  console.log(text)
})

setTimeout(() => {
	py.call('h')
}, 1000)

/*
  To implement
*/
py.on('error', (error) => {
  console.log(error)
})
