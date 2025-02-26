const { Barcode } = require("../models");

// Function to get barcode details
const getBarcodeDetails = async (req, res) => {
  try {
    const { barcode } = req.params; // Get barcode from URL

    // Find barcode record in DB
    const barcodeData = await Barcode.findOne({
      where: { barcode_value: barcode },
    });

    if (!barcodeData) {
      return res.status(404).json({ success: false, message: "Barcode not found!" });
    }

    return res.json({ success: true, data: barcodeData });
  } catch (error) {
    console.error("Error fetching barcode:", error);
    return res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

module.exports = { getBarcodeDetails };
