const sgMail = require("@sendgrid/mail");
const sgApi = process.env.SG_API;
sgMail.setApiKey(sgApi);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "admin@daniel-simms.io",
    subject: "Welcome to Task-Manager!",
    text: `Hello ${name}! Let me know how you get along with the app.`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "admin@daniel-simms.io",
    subject: "Goodbye from Task-Manager!",
    text: `It's sad to see you go, ${name}! Is there anything we could have done better to keep you around?`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
