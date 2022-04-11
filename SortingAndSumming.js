//Sorting and summing

let products = [
  { product: "Shirt", price: 10 },
  { product: "Laptop", price: 2400 },
  { product: "Bike", price: 450 },
  { product: "Chair", price: 150 },
  { product: "Phone", price: 1500 },
  { product: "Shoes", price: 60 },
  { product: "Car", price: 25000 },
  { product: "Coffe Machine", price: 500 },
];

for (let item in products) {
  let prod = products[item];

  if (prod.price <= 100) {
    console.log(`${prod.product} are cheap`);
  } else if (prod.price <= 500) {
    console.log(`${prod.product} is normal priced`);
  } else if (prod.price <= 3000) {
    console.log(`${prod.product} is expensive`);
  } else {
    console.log(`${prod.product} is very expensive`);
  }
}

let sum = 0;
for (let prices in products) {
  let sumOfPrice = products[prices];

  sum += sumOfPrice.price;
}

console.log(`Sum of all products prices $ ${sum}`);
