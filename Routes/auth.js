const express = require("express");
const router = express.Router();

// @route     GET api/uuth
// @desc      Get logged in user
// @access    Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route     POST api/uuth
// @desc      Auth user & get token
// @access    Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
