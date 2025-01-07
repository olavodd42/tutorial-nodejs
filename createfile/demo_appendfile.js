var fs = require('fs');

// cria um novo arquivo chamado 'mynewfile1' com conteúdo 'Hello content!'
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});