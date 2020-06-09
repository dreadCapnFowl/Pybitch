var fetch = require('node-fetch');
var events = require('events');
const dgram = require('dgram');

const client = dgram.createSocket('udp4');

class Pyth extends events.EventEmitter {
  constructor() {
      super();
  }

  call(f, params) {

	var data = {
		"function": f,
		"params": params
	}

	const message = Buffer.from(JSON.stringify(data));
	client.send(message, 8088, 'localhost', (err) => {
	});
  }

  run(scriptname) {

	require("child_process").spawn('python3', [scriptname], {
	  cwd: process.cwd(),
	  detached: false,
	  stdio: "inherit"
	});
	/*
    var proc = require('child_process').execFile('./py3', [
        '-u',
        scriptname,

    ],{
      detached: true,
      stdio: ['ignore', 1, 2]
    });

    proc.unref();
    var em = this;

    proc.stdout.on('data', function(data) {
        try {
          var json = JSON.parse(data.toString())
          em.emit('json', json)
        } catch(e) {
          em.emit('text', data.toString())
        }
    });
	*/
  }

}

module.exports = Pyth
