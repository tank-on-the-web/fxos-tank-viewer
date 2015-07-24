// Create hostname.js
// Run:
//   node make-hostname.js

var fs = require('fs');
var os = require('os');

fs.writeFileSync('hostname.js', 'var HOSTNAME = "' + os.hostname() + '";');
