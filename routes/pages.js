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

router.get("/produk", (req, res) => {
  const { kategori, search } = req.query;
  let filtered = products;

  if (kategori) {
    filtered = filtered.filter((p) => p.category.toLowerCase() === kategori.toLowerCase());
  }
  if (search) {
    const keyword = search.toLowerCase();
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(keyword));
  }

  const categories = [...new Set(products.map((p) => p.category))];

  res.render("produk", {
    title: "Produk - Toko Sembako Ariesta",
    activePage: "produk",
    products: filtered,
    categories,
    currentKategori: kategori || "",
    currentSearch: search || ""
  });
});

router.get("/produk/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).render("produk-detail", {
      title: "Produk Tidak Ditemukan - Toko Sembako Ariesta",
      activePage: "produk",
      product: null
    });
  }

  res.render("produk-detail", {
    title: `${product.name} - Toko Sembako Ariesta`,
    activePage: "produk",
    product
  });
});

module.exports = router;