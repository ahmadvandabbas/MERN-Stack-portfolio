const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.post("/api/email", (req, res) => {
  const { email, subject, message } = req.body;
  console.log(email, subject, message);
  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 495,
    auth: {
      user: "abbasahmadvand870@gmail.com",
      pass: "abbass19955",
    },
  });

  let mailOptions = {
    from: email,
    to: "abbasahmadvand870@gmail.com",
    subject: subject,
    html: `
    <h3>Information:</h3>
      <ul>
          <li>email from : ${email} </li>
          <li>message : ${message}</li>
      </ul>
  `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("success!!");
    }
  });
  smtpTransport.close();
});

app.listen(8000, () => {
  console.log(`listening server on port 8000`);
});
