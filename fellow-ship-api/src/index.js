const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const config = require("config");
const bodyParser = require("body-parser");
const mongoDB = require('./services/database/database');
const gameRoute = require ('./routes/games');
const userRoute = require("./routes/user");

const app = express();

// ------ Database connection ------
mongoDB.mongoConnect('fellowship').catch(error => console.error(error));

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user", userRoute);
app.use("/api/game", gameRoute);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.send({ message: err.message, detail: err });
});

const port = config.get("app.port");
console.log(`Served on port ${port}`);

app.listen(port);
