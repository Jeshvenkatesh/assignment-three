const express = require('express');

const path = require('path');

const rootDir = require('./util/path');

const router = express.Router();

router.use("/user",(req, res, next) => {
    res.sendFile(path.join(rootDir,"pages","user.html"));
});

module.exports = router;