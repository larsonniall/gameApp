const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TetrisSchema = new Schema({
    highRows: {
        type: Number,
        required: true,
    },
    highScore: {
        type: Number,
        required: true,
    },
    highLevel: {
        type: Number,
        required: true,
    }
});

const Tetris = mongoose.model("Tetris", TetrisSchema);
module.exports = Tetris;