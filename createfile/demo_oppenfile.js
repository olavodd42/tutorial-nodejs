var fs = require('fs');

// abre o arquivo para escrita
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});