require("dotenv").config();
const express = require("express");
const https = require("https");
const request = require("request");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) => {
    const firstName = req.body.userFirstName;
    const lastName = req.body.userLastName;
    const email = req.body.userEmail;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const message = {
        from: `Pepeworm <${process.env.EMAIL}>`,
        to: email,
        subject: `Hello ${firstName} ${lastName}!`,
        html: `<p>Pepeworm here, how are you doing?</p>`,
    };

    transporter.sendMail(message, (err) => {
        if (err) {
            console.log(err);
            res.redirect("/error");
        } else {
            res.redirect("/success");
        }
    });
});

app.route("/error")
    .get((req, res) => {
        res.sendFile(`${__dirname}/error.html`);
    })
    .post((req, res) => {
        res.redirect("/#contact");
    });

app.route("/success")
    .get((req, res) => {
        res.sendFile(`${__dirname}/success.html`);
    })
    .post((req, res) => {
        res.redirect("/#contact")
    });

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
});
