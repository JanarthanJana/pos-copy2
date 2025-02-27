const express = require("express");
const app = express();
const priceRoutes = require("./routes/pricesRouter");
const orderRoutes = require("./routes/ordersRouter");

app.use(express.json());

// Use the price search route
app.use("/api/price", priceRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
