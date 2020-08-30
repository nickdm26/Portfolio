const functions = require('firebase-functions');
const cors = require('cors')({origin: true });
const nodemailer = require('nodemailer');
const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox9d25acca681d4fc49d9e32bd84af8122.mailgun.org';
const api_key = functions.config().mailgun.key;
const mg = mailgun({apiKey: api_key, domain: DOMAIN});




const gmailEmail = functions.config().gmail.email;
// const gmailpassword = functions.config().gmail.password;
// const mailTransport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: gmailEmail,
//         pass: gmailpassword
//     }
// });


// exports.submit = functions.https.onRequest((req, res) => {
//     cors(req, res, () => {
//         if(req.method !== 'POST'){
//             return;
//         }

//         const mailOptions = {
//             from: req.body.email,
//             replyTo: req.body.email,
//             to: gmailEmail,
//             subject: `Message from my website`,
//             text: req.body.message,
//             html: `<p>${req.body.message}`
//         };

//         mailTransport.sendMail(mailOptions);

//         res.status(200).end();
//         // or you can pass data to indicate success.
//         //res.status(200).send({isEmailSend: true});
//     });
// });

exports.submit = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if(req.method !== 'POST'){
            return;
        }

        const data = {
            from: req.body.email,
            replyTo: req.body.email,
            to: gmailEmail,
            subject: `Message from my website via Mailgun`,
            text: req.body.message,
        };

        mg.messages().send(data, function(error, body){
            console.log(body);
        });
    });
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
