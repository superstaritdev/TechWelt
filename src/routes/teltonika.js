const router = require("express").Router();

module.exports = () => {
  const teltonika = require("../controllers/teltonika");
  const { createTeltonika } = teltonika();



  return router;
};
