import express from "express";
import cors from "cors";
import helmet from "helmet";
import config from "config";
import bodyParser from "body-parser";

import userRoute from "./routes/user";

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user", userRoute);

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
