const nodemailer = require('nodemailer');
const response = require('./response')

// transporter object with password authenticated smtp mailer
const transporterSMTP = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: 587,
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS
    }
})

/**
 * Function to send the mail
 * @param {String} to Receiver's email address
 * @param {String} subject Email's subject header
 * @param {String} body HTML template body of the email in encoded string
 */
const send = (to, subject, body) => {
    try {
        const mailOptions = {
            from: '"Cohand"<cohand.admin@gmail.com>',
            to,
            subject,
            html: body,
            attachments: [{
                filename: 'logoImg.png',
                path: 'public/asset/logo.png',
                cid: 'logoImg'
            }
            ]
        };
        return new Promise((ok, fail) => {
            transporterSMTP.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error.stack);
                    return fail(error);
                }
                console.log(JSON.stringify(info));
                return ok(info);
            });
        });
    } catch (error) {
        console.log('--->>' , error)
    }
}

module.exports = send;