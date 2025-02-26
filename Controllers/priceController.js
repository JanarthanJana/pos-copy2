const { Price, Barcode } = require("../models");

// Function to get price by barcode
const getPriceByBarcode = async (req, res) => {
  try {
    const { barcode } = req.params; // Get barcode from URL

    // Find the barcode entry
    const barcodeData = await Barcode.findOne({
      where: { barcode_value: barcode },
    });

    if (!barcodeData) {
      return res.status(404).json({ success: false, message: "Barcode not found!" });
    }

    // Find the price using barcode_id
    const priceData = await Price.findOne({
      where: { barcode_id: barcodeData.id }, // Select required fields
    });

    if (!priceData) {
      return res.status(404).json({ success: false, message: "Price details not found!" });
    }

    return res.json({ success: true, data: priceData });
  } catch (error) {
    console.error("Error fetching price:", error);
    return res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

module.exports = { getPriceByBarcode };
