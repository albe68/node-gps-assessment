const express = require("express");
const app = express();
const config = require("./config");
const PKtController = require("./controller");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/v1/pvt-data/submit", PKtController);

app.listen(config.PORT, () => {
  console.log(`Sever listening to port ${config.PORT}`);
});
