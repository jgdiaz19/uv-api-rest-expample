const express = require("express");
const router = express.Router();
const { getItems, createItems } = require("../controllers/tracks");
const { validatorCreateItem } = require("../validators/tracks.validator");

router.get("/", getItems);
router.post("/", validatorCreateItem, createItems);

module.exports = router;