require("dotenv").config();

const config = {
  PORT: process.env.PORT,
  DATE_FORMAT: "DDMMYYYY",
  TIME_FORMAT: "HHmmss",
};
module.exports = config;
