//object property shorthand
const name = "tilak";
const userAge = 31;

const object = {
  name,
  age: userAge,
  location: "Noida",
};
console.log(object);

//object destructuring

const product = {
  label: "red Notebook",
  price: 3,
  stock: 20,
  salePrice: undefined,
};

// const label = product.label;
// const stock = product.stock;

const { label: productLabel, stock, price, rating = 5 } = product;
console.log("productLabel=", productLabel);
console.log("stock=", stock);
console.log("price=", price);
console.log("rating=", rating);

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log("type=", type, "Label=", label, "Stock=", stock);
};

transaction("order", product);

transaction("food");
