const express = require("express");
const port = 8080;

const user_model = require("./user_module");
const User = user_model.User;

const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello Friends..");
});

app.get("/user", async (req, res) => {
	let data = await User.find().sort({_id:-1});
	res.send(data);
});

app.get("/user/:id", async (req, res) => {
	console.log(req.params.id);
	let data = await User.find({"name": req.params.name});
	res.send(data[0]);
});

app.listen(process.env.PORT || port, () => {	
	console.log(`Listening on port ${port}`);
});