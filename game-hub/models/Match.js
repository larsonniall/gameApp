const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    bestTime: {
        type: Number,
        required: true,
    },
});

const Match = mongoose.model("Match", MatchSchema);
module.exports = Match;