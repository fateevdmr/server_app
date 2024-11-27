const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const productsFilePath = path.join(__dirname, '../data/products.json');

// чтение данных из файла JSON
const readProducts = () => {
  const data = fs.readFileSync(productsFilePath, 'utf-8');
  return JSON.parse(data);
};

// запись данных в файл JSON
const writeProducts = (products) => {
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
};

// получение всех продуктов
router.get('/', (req, res) => {
  const products = readProducts();
  res.json(products);
});

// добавление нового продукта
router.post('/', (req, res) => {
  const newProduct = req.body;
  const products = readProducts();

  products.push(newProduct);
  writeProducts(products);

  res.status(201).json(newProduct);
});

module.exports = router;
