const path = require('path');

const rootDir = require('./util/path');

const express = require('express');

const homeRouter = require('./home');

const userRouter = require("./user");

const app = express();

app.use(userRouter);

app.use(homeRouter);
app.use(express.static(path.join(__dirname,"public")));

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir,"pages","404.html"));
});

app.listen(3000);