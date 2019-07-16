const express = require("express");
const router = express.Router();

const Sessions = require("../routes/sessions-model");

router.get("/all", (req, res) => {
    Sessions.find()
    .then(sessions => {
        res.status(200).json(sessions)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});


module.exports = router;