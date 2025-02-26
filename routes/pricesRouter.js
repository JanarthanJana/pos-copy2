const express = require("express");
const router = express.Router();
const { Price, Barcode, Product } = require("../models");

// Search Product Name & Price by barcode_no
router.get("/search/:barcode_no", async (req, res) => {
  try {
    const { barcode_no } = req.params;

    // Find barcode by barcode_no
    const barcode = await Barcode.findOne({
      where: { barcode_no },
      include: {
        model: Price,
        include: {
          model: Product,
          attributes: ["name"], // Fetch only product name
        },
      },
    });

    if (!barcode || !barcode.Price) {
      return res.status(404).json({ message: "No product found for this barcode" });
    }

    res.json({
      product_name: barcode.Price.Product.name,
      price: barcode.Price.Sellingprice,
    });
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
