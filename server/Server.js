const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



const register = require("./Routes/register");
const login = require("./Routes/Login")
const post=require("./Routes/CommunityPost")
const postRetrieve=require("./Routes/CommunityRetrieve")
const Application=require("./Routes/ApplicationForm")
const ApplicationsRetrieve=require("./Routes/ApplicationRetrieve")
const shoerlist=require("./Routes/shortlist")

const verifyToken=require("./Middlewares/VerifyTokeb")




const app = express();

mongoose.connect('mongodb://localhost:27017/SDP3_MERN', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(bodyParser.json())
app.use(express.json());
app.use(express.static('uploads'))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


app.use("/api", register);
app.use("/api",login);
app.use("/api", post);
app.use("/api",postRetrieve)
app.use("/api",Application)
app.use('/api',ApplicationsRetrieve)
app.use('/api',shoerlist)


//listening on port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
