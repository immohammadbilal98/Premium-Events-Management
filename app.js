//Import
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const compression = require("compression");
const nodemailer = require("nodemailer")
//=====================================
require("dotenv").config();

const app = express();

// compress all responses
app.use(compression());

//PORT
let port= process.env.PORT || 3000;

//View Engine
app.set('view engine', 'ejs');

//Static Folder
app.use(express.static(path.join(__dirname, "public")));  

// Body Parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//PATH FILES ==================================================================
//HOME
app.get("/",function(req,res){
    res.render("home");               
});

app.get("/careers",function(req,res){
    res.render("careers");               
});


//NODMAILER -CONTACT FORM

app.post('/send', (req, res) => {
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone No.: ${req.body.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
  
    // create reusable transporter object using the default SMTP transport
    //    let transporter = nodemailer.createTransport({
    //   host: 'smtp.premiumeventsmanagement.com',
    //   port: 587,
    //   auth: {
    //         },
    //   tls:{
    //     rejectUnauthorized:false
    //   }
    // });
    
  


    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.USER,
        pass: process.env.PASS,
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET,
        refreshToken: process.env.REFRESHTOKEN
      }
    });

  
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Premium Events Management Contact"', // sender address
        to: 'im.mohammedbilal98@gmail.com', // list of receivers
        subject: 'Premium Events Management Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        // res.render("home", { msg: "email has been sent. " });
        res.render("send");
    });
    });
  


//Listen on port 4000
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
  });
  