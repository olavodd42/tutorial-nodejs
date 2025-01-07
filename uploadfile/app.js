var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/') {
    // Serve o formulário de upload
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  } else if (req.url == '/fileupload' && req.method.toLowerCase() == 'post') {
    // Processa o upload do arquivo
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.write('Error parsing the file');
        res.end();
        return;
      }
      var oldpath = files.filetoupload.filepath || files.filetoupload.path;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename || files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.write('Error moving the file');
          res.end();
          return;
        }
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('404 Not Found');
    res.end();
  }
}).listen(8080);

console.log('Server running at http://localhost:8080/');