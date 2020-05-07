# Pybitch
This  lets you make Python your bitch using NodeJS. Comes with the ELF.

```javascript

var Pyth = require('Pyth.js')
var py = new Pyth();

py.run('./test.py')

py.on('json', (json) => {
  console.log(json)
})

py.on('text', (text) => {
  console.log(text)
})

/*
  To implement
*/
py.on('error', (error) => {
  console.log(error)
})

```

and adverserial are belong to you.
