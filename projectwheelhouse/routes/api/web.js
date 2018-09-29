const router = require("express").Router();
const webcontroller = require("../../controller/webcontroller.js");

router.route("/")
  .get(webcontroller.findAll)
  .post(webcontroller.create);

module.exports = router;
