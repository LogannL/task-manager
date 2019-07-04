const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lefebvre.logann@gmail.com',
        subject: 'Welcome, '+ name + ' ! ',
        text: 'Welcome dude',
    })
}

const sendChurnEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lefebvre.logann@gmail.com',
        subject: 'Bye, '+ name + ' ! ',
        text: 'Bye dude'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendChurnEmail
}