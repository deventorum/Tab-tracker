/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status/", (req, res) => {
	res.send({
		message: "server"
	});
});

app.post("/register/", (req, res) => {
	res.send({
		message: `Hello ${req.body.email} Your user was registered`
	});
});


// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 8081);
