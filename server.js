import express, { Router, json } from "express";
const router = Router();
import cors from "cors";
import { createTransport } from "nodemailer";

// server used to send emails
const app = express();
app.use(cors());
app.use(json());
app.use("/", router);
app.listen("https://mail-server-2p6m.onrender.com", () =>
  console.log("Server Running")
);

const contactEmail = createTransport({
  service: "gmail",
  auth: {
    user: "elvira636583@gmail.com",
    pass: "pgpueykfnmhjmesr",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

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
