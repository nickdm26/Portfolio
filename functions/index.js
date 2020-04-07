const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailpassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailpassword
    }
});


exports.submit = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if(req.method !== 'POST'){
            return;
        }

        const mailOptions = {
            from: req.body.email,
            replyTo: req.body.email,
            to: gmailEmail,
            subject: `Message from my website`,
            text: req.body.message,
            html: `<p>${req.body.message}`
        };

        mailTransport.sendMail(mailOptions);

        res.status(200).end();
        // or you can pass data to indicate success.
        //res.status(200).send({isEmailSend: true});
    });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
