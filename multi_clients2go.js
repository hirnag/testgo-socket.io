var spawn = require('child_process').spawn;
var fs = require('fs');

var NUM = (process.argv.length > 2)? process.argv[2] : 10;

for(var i = 0; i<NUM; i++) {
  var sp = spawn("node", ['client2go.js']);
  sp.stdout.on("data", function(data){console.log("" + data)});
}

