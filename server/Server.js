const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const register = require("./Routes/register");
const login = require("./Routes/Login")

const app = express();

mongoose.connect('mongodb://localhost:27017/SDP3_MERN', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(bodyParser.json())
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


app.use("/api", register);
app.use("/api", login);


//listening on port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
