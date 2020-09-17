const express = require("express");
const router = express.Router();
const Match = require("../../models/Match");
const Tetris = require("../../models/Tetris");
const Tic = require("../../models/Tic");

const getStats = (req, res) => {
    Match.find(null, null, { sort: { timer :  } }, (err, stats) => {
        if (err) {
            res.send(err);
        }
        res.json(stats);
    });
    Tetris.find(null, null, { sort: { timer :  } }, (err, stats) => {
        if (err) {
            res.send(err);
        }
        res.json(stats);
    });
    Tic.find(null, null, { sort: { timer :  } }, (err, stats) => {
        if (err) {
            res.send(err);
        }
        res.json(stats);
    });
};

const postStats = (req, res) => {
    let stats = Object.assign(new stats(), req.body);
    stats.save(err => {
        if (err) {
            res.send(err);
        }
        res.json({ message: "stats saved" });
    });
};

const deleteStats = (req, res) => {
    Stats.remove(
        { _id: req.params.id },
        err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "stats deleted" });
        }
    );
};

export { getStats, postStats, deleteStats};