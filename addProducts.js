const fetch = require('node-fetch');

const products = [
  { "name": "Шапка", "price": 500, "category": "Аксессуары", "rating": 4.5, "image": false },
  { "name": "Куртка", "price": 3500, "category": "Одежда", "rating": 4.8, "image": false },
  { "name": "Шарф", "price": 700, "category": "Аксессуары", "rating": 4.3, "image": false },
  { "name": "Перчатки", "price": 600, "category": "Аксессуары", "rating": 4.2, "image": false },
  { "name": "Кроссовки", "price": 4200, "category": "Обувь", "rating": 4.7, "image": false },
  { "name": "Футболка", "price": 800, "category": "Одежда", "rating": 4.1, "image": false },
  { "name": "Рюкзак", "price": 2500, "category": "Аксессуары", "rating": 4.6, "image": false },
  { "name": "Штаны", "price": 2000, "category": "Одежда", "rating": 4.5, "image": false },
  { "name": "Кепка", "price": 400, "category": "Аксессуары", "rating": 4.2, "image": false },
  { "name": "Рубашка", "price": 1200, "category": "Одежда", "rating": 4.3, "image": false },
  { "name": "Пиджак", "price": 3000, "category": "Одежда", "rating": 4.7, "image": false },
  { "name": "Сапоги", "price": 4800, "category": "Обувь", "rating": 4.4, "image": false },
  { "name": "Очки", "price": 1500, "category": "Аксессуары", "rating": 4.6, "image": false },
  { "name": "Часы", "price": 5500, "category": "Аксессуары", "rating": 4.9, "image": false },
  { "name": "Пальто", "price": 4000, "category": "Одежда", "rating": 4.8, "image": false },
  { "name": "Ремень", "price": 700, "category": "Аксессуары", "rating": 4.4, "image": false },
  { "name": "Носки", "price": 150, "category": "Одежда", "rating": 4.1, "image": false },
  { "name": "Обувь", "price": 4500, "category": "Обувь", "rating": 4.6, "image": false },
  { "name": "Свитер", "price": 2200, "category": "Одежда", "rating": 4.7, "image": false },
  { "name": "Галстук", "price": 900, "category": "Аксессуары", "rating": 4.3, "image": false },
  { "name": "Плащ", "price": 3800, "category": "Одежда", "rating": 4.5, "image": false },
  { "name": "Ботинки", "price": 4300, "category": "Обувь", "rating": 4.4, "image": false },
  { "name": "Сандалии", "price": 2700, "category": "Обувь", "rating": 4.3, "image": false },
  { "name": "Худи", "price": 1800, "category": "Одежда", "rating": 4.5, "image": false },
  { "name": "Леггинсы", "price": 1300, "category": "Одежда", "rating": 4.1, "image": false },
  { "name": "Куртка 2", "price": 3700, "category": "Одежда", "rating": 4.8, "image": false },
  { "name": "Рюкзак 2", "price": 2700, "category": "Аксессуары", "rating": 4.7, "image": false },
  { "name": "Футболка 2", "price": 900, "category": "Одежда", "rating": 4.3, "image": false },
  { "name": "Брюки", "price": 2100, "category": "Одежда", "rating": 4.6, "image": false }
];

async function addProducts() {
  for (const product of products) {
    const response = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });

    console.log(await response.json());
  }
}

addProducts();