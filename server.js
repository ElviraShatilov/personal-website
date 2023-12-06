import express, { Router, json } from "express";
import cors from "cors";
import { createTransport } from "nodemailer";

// creating Express App and configuring middleware
const app = express();
app.use(cors()); // enables CORS for all routes
app.use(json()); // parses incoming JSON requests

// creating Express Router
const router = Router();
app.use("/", router); // mounts the router at the root path

// starting Express Server
app.listen(5001, () => console.log("Server Running"));

// setting up Nodemailer for email configuration
// configures the email transport using Gmail's SMTP service
const contactEmail = createTransport({
  service: "gmail",
  auth: {
    user: "elvira636583@gmail.com",
    pass: "pgpueykfnmhjmesr",
  },
});


// verifying email configuration
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});


// defining a POST Route for handling contact form submissions
router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "elvira636583@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
