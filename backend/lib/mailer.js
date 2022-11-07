// require('dotenv').config()
import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: 'wintpant@gmail.com',
      pass: 'qzrcbyzolsylkwok'
   }
});

const mailOptions = () => {
   return {
      from: 'wintpant@gmail.com',
      to: 'rettakecsgo@gmail.com',
      subject: 'Mail sent with Node JS',
      text: 'Text of letter 123'
   }
};

const sendEmailToUser = (options) => {
   transporter.sendMail(options);
}

export default sendEmailToUser;

sendEmailToUser(mailOptions());