// routes/pages.js
const express = require("express");
const router = express.Router();
const products = require("../data/products");

router.get("/", (req, res) => {
  const previewProducts = products.slice(0, 4);
  res.render("index", {
    title: "Beranda - Toko Sembako Ariesta",
    activePage: "beranda",
    previewProducts
  });
});

module.exports = router;