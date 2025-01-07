var fs = require('fs');

// remove o arquivo especificado
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});