const express = require("express");
const port = 8080;


const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello Friends..");
});

app.listen(process.env.PORT || port, () => {	
	console.log(`Listening on port ${port}`);
});