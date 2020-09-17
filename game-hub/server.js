const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");

const users = require("./routes/api/users");

import { getStats, postStats, deleteStats } from "./routes/api/stats";

const app = express();

app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());
app.use(morgan('dev'));

//const db = require("./config/keys").mongoURI;

//mongoose.connect(db,{ useNewUrlParser: true })
//        .then(() => console.log("mongodb connected"))
//        .catch(err => console.log(err));

const uri = "mongodb+srv://username:password@users.vaiff.mongodb.net/users?retryWrites=true&w=majority";

mongoose.connect(uri) || "http://localhost:3000/",{
    useNewUrlParser: true,
}

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.route('/stats').post(postStats).get(getStats).delete(deleteStats);

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
};

app.listen(PORT, () => {
    console.log("listening on PORT ${PORT}!");
});