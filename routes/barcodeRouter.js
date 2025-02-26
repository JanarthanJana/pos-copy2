const express = require("express");
const router = express.Router();
const { getBarcodeDetails } = require("../Controllers/barcodeController");

router.get("/:barcode", getBarcodeDetails);

module.exports = router;
