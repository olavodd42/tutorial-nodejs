var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'adelia81@ethereal.email',
    pass: '1vM37RG2gtZ2s3E9sE'
  }
});

var mailOptions = {
  from: 'adelia81@ethereal.email',
  to: 'olavodalberto921@gmail.com, olavo.dalberto@acad.ufsm.br',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});