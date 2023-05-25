const express = require('express');
const router = express.Router();
const { resumes } = require("./resumes");

router.route("/").get(resumes);

module.expores = router;