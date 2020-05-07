var events = require('events');

class Pyth extends events.EventEmitter {
  constructor() {
      super();
  }

  run(scriptname) {
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

  }
}

module.exports = Pyth
