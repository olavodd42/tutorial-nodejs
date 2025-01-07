var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (err) {
        res.write('An error occurred during file upload.');
        res.end();
        return;
      }

      // Ensure `filepath` exists in the parsed `files` object.
      if (files.filetoupload && files.filetoupload.filepath) {
        var oldpath = files.filetoupload.filepath;
        var newpath = 'C:/Users/olavo/' + files.filetoupload.originalFilename;
        
        // Rename (move) the uploaded file to the new location.
        fs.rename(oldpath, newpath, function (err) {
          if (err) {
            res.write('Error moving the file.');
            res.end();
            return;
          }
          res.write('File uploaded and moved successfully!');
          res.end();
        });
      } else {
        res.write('No file was uploaded.');
        res.end();
      }
    });
  } else {
    // HTML form for file upload.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
  }
}).listen(8080);
