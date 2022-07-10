require('dotenv').config()
const sgMail = require("@sendgrid/mail")

// const sendGridKeys = process.env.REACT_APP_SENDGRID_API_KEY;

const sendGridKeys = "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"

sgMail.setApiKey(sendGridKeys)

const message = {
    to: "andresomar95@gmail.com",
    from: "andres@criptofor.com",
    subject: "Hello from sendgrid",
    text: "Hello from sendgrid",
    html: "<h1>Hello from sendgrid</h1>",
}


const sendEmail = async ( message ) => { 
    sgMail.send(message)
    .then(response => console.log("Email sent..."))
    .catch(error => console.log(error.message))

}


module.exports = {
    sendEmail, message
};