//Step 1: Database connection using connection string
const mongoose = require("mongoose");
//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet";


const conn_str = "mongodb+srv://MAITRI:MAITRI@cluster0.qixwo56.mongodb.net/Portfolio?retryWrites=true&w=majority"
mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected successfully..."))
.catch( (error) => console.log(error) );


//Step 2: Create Schema (similar to Java Class)
const userSchema = new mongoose.Schema({
name: String,
email: String,
subject: String,
msg: String
})


//Step 3: Create collection Object (model)
// MAPPING
const userObject = new mongoose.model("Portdata", userSchema);
exports.User = userObject;