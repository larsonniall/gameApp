const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicSchema = new Schema({
    wins: {
        type: Number,
        required: true,
    },
});

const Tic = mongoose.model("Tic", TicSchema);
module.exports = Tic;