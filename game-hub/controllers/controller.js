const db = require("../models");


module.exports = {
    matchStats(req, res) {
        db.Match.create(req.body)
        .then((matchDb) => req.json(matchDb))
        .catch((err) => res.status(422).json(err));
    },
    tetrisStats(req, res) {
        db.Tetris.create(req.body)
        .then((tetrisDb) => req.json(tetrisDb))
        .catch((err) => res.status(422).json(err));
    },
    ticStats(req, res) {
        db.Tic.create(req.body)
        .then((ticDb) => req.json(ticDb))
        .catch((err) => res.status(422).json(err));
    }
}