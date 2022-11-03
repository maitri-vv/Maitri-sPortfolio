const express = require("express");
const port = 8080;

const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());

app.get("/add", (req, res) => {
    //console.log(req.query);
    x = parseInt(req.query.num1);
    y = parseInt(req.query.num2);
    
	res.send(`${x} + ${y} = ${x+y}`);
});

app.listen(process.env.PORT || port, () => {	
	console.log(`Listening on port ${port}`);
});