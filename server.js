const express = require('express')
const app = express()
const path = require('path');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const port = 3000
require('dotenv').config(); 

const MailerTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ServiceEmail,
      pass: process.env.ServiceEmailPassword
    }
  })

  
app.use(favicon(path.join(__dirname, 'assets/imgs/icon/icon.png')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.get('/',(req,res) =>  res.sendFile(path.join(__dirname, '.assets/index.html')))

app.post('/', async (req,res) => { 

  
    
    try {
            
        await MailerTransport.sendMail({
            headers:[req.body.emailInput,req.body.nameInput],
            from:req.body.emailInput,
            sender: req.body.emailInput,
            to:  process.env.ServiceEmail,
            subject: req.body.subjectInput,
            text: 'De: ' + req.body.emailInput + ' - ' + req.body.nameInput + '\n\n'+req.body.messageInput 
        })
        
        return res.sendFile(path.join(__dirname, './assets/success.html'))
        
    }catch(err){
        console.log(err)
        return res.send('Something went wrong...')

    }
 

})

app.listen(port, () => console.log(`Tiago Portfolio app listening on port ${port}!`))