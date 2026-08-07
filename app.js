// app.js
const express = require("express");
const path = require("path");

const requestLogger = require("./middlewares/logger");
const pageRoutes = require("./routes/pages");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(requestLogger);

app.use("/", pageRoutes);
app.use("/api", apiRoutes);

app.use((req, res) => {
  res.status(404).send("404 - Halaman tidak ditemukan");
});

app.listen(PORT, () => {
  console.log(`Server Toko Ariesta berjalan di http://localhost:${PORT}`);
});