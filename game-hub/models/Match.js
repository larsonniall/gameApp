const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    timer: {
        type: Number,
    },
    moveCounter: {
        type: Number,
    },
});

const Match = mongoose.model("Match", MatchSchema);
module.exports = Match;