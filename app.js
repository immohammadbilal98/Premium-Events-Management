//Import
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const compression = require("compression");
const nodemailer = require("nodemailer")
const fs = require('fs')
const multer = require('multer')
const cors = require('cors')

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

app.use(cors());

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
        to: 'info@premiumeventsmanagement.com', // list of receivers
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
 
// @_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@


var name;
var phone;
var email;
var msg;
var paths

var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "uploads");
    },
    filename: function(req, file, callback) {
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

var upload = multer({
    storage: Storage,
}); //Field name and max count
// .single("image")

app.post('/careers/sendcareers',(req,res) => {
    upload(req,res,function(err){
        if(err){
            console.log(err)
            return res.end("Something went wrong!");
        }else{
            name = req.body.namec
            phone = req.body.phonec
            email = req.body.emailc
            msg = req.body.msgc
            paths = req.file.paths
            console.log(name)
            console.log(phone)
            console.log(email)
            console.log(msg)
            console.log(req.file)
            console.log(req.files)
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
        
              
              var mailOptions = {
                from: '"Premium Events Management Contact"', // sender address
                to: 'im.mohammedbilal98@gmail.com', // list of receivers
                subject: 'Premium Events Management Contact Request', // Subject line
                text:'Hello world?',
                attachments: [
                  {
                   paths: paths
                  }
               ]
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                  fs.unlink(path,function(err){
                    if(err){
                        return res.end(err)
                    }else{
                        console.log("deleted")
                        return res.render('/sendcareers')
                    }
                  })
                }
              });
        }
    })
})



// @_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@_@



//Listen on port 4000
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
  });
  

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
    
  


   