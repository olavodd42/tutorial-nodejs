var fs = require('fs');

// sobrescreve o conteúdo original do arquivo
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
