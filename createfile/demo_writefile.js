var fs = require('fs');

// cria o arquivo 'mynewfile3' com o texto 'Hello content!'
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});