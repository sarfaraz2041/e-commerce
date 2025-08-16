const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

let cart = [];

app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve index.html

// Get cart
app.get("/cart", (req, res) => {
  res.json(cart);
});

// Add to cart
app.post("/add-to-cart", (req, res) => {
  const product = req.body;
  const existing = cart.find(p => p.id === product.id);
  if (existing) {
    existing.quantity += product.quantity;
  } else {
    cart.push(product);
  }
  res.json({ message: "Product added to cart" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
