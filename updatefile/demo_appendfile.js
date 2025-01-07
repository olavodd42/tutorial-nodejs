var fs = require('fs');

// adiciona o conteudo ao final do arquivo
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});