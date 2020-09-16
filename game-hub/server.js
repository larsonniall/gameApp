const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());

//const db = require("./config/keys").mongoURI;

//mongoose.connect(db,{ useNewUrlParser: true })
//        .then(() => console.log("mongodb connected"))
//        .catch(err => console.log(err));

const uri = "mongodb+srv://username:password@users.vaiff.mongodb.net/users?retryWrites=true&w=majority";

mongoose.connect(uri) || "http://localhost:3000/",{
    useNewUrlParser: true,
}

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