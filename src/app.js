const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("/products", (req, res) => {
  console.log("************************", process.env.NODE_ENV);
  const products = [
    {
      id: 1,
      name: "A",
    },
    {
      id: 2,
      name: "b",
    },
  ];

  res.status(200).json(products);
});

module.exports = app;
