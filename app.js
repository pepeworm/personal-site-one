
const express = require("express");
const https = require("https");
const request = require("request");

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

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
            },
        ],
    };

    const jsonData = JSON.stringify(data);

    const dc = "us17";
    const listId = "bd3c5ea890";

    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}`;

    const options = {
        method: "POST",
        auth: "pepeworm:1f508f7f38bafcc99c7683135bad50e7-us17",
    };

    const request = https.request(url, options, (response) => {
        if (response.statusCode === 200) {
            res.sendFile(`${__dirname}/success.html`);
        } else {
            res.sendFile(`${__dirname}/error.html`);
        }

        response.on("data", (data) => {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});

app.post("/error", (req, res) => {
    res.redirect("/#contact");
});

app.post("/success", (req, res) => {
    res.redirect("/#contact");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
});
