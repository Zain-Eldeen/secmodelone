const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())


async function connectDB() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/ecommerce");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log('DB connection error:', err);
  }
}

connectDB();

app.get("/", async (req, res) => {
  let welcome = 'Hi'
  res.status(200);
  res.send(welcome);
});

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
  phone: String,
});

let User = new mongoose.model("User", userSchema);

let newUser1 = new User({
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password123",
  phone: "1234567890",
}).save();

let newUser2 = new User({
  id: 2,
  name: "Jane Smith",
  email: "jane.smith@example.com",
  password: "password123",
  phone: "0987654321",
}).save();

let newUser3 = new User({
  id: 3,
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  password: "password123",
  phone: "1112223333",
}).save();

let newUser4 = new User({
  id: 4,
  name: "Bob Brown",
  email: "bob.brown@example.com",
  password: "password123",
  phone: "4445556666",
}).save();

let newUser5 = new User({
  id: 5,
  name: "Charlie Davis",
  email: "charlie.davis@example.com",
  password: "password123",
  phone: "7778889999",
}).save();

let newUser6 = new User({
  id: 6,
  name: "Diana Evans",
  email: "diana.evans@example.com",
  password: "password123",
  phone: "0001112222",
}).save();

let newUser7 = new User({
  id: 7,
  name: "Eve Foster",
  email: "eve.foster@example.com",
  password: "password123",
  phone: "3334445555",
}).save();

let newUser8 = new User({
  id: 8,
  name: "Frank Green",
  email: "frank.green@example.com",
  password: "password123",
  phone: "6667778888",
}).save();

let newUser9 = new User({
  id: 9,
  name: "Grace Harris",
  email: "grace.harris@example.com",
  password: "password123",
  phone: "9990001111",
}).save();

let newUser10 = new User({
  id: 10,
  name: "Henry Jackson",
  email: "henry.jackson@example.com",
  password: "password123",
  phone: "2223334444",
}).save();

// Product Schema and Model
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  stock: Number,
});

let Product = new mongoose.model("Product", productSchema);

let newProduct1 = new Product({
  id: 1,
  name: "Laptop",
  description: "A high-performance laptop",
  price: 999.99,
  stock: 50,
}).save();

let newProduct2 = new Product({
  id: 2,
  name: "Smartphone",
  description: "A latest model smartphone",
  price: 699.99,
  stock: 100,
}).save();

let newProduct3 = new Product({
  id: 3,
  name: "Headphones",
  description: "Noise-cancelling headphones",
  price: 199.99,
  stock: 200,
}).save();

let newProduct4 = new Product({
  id: 4,
  name: "Smartwatch",
  description: "A smartwatch with various features",
  price: 299.99,
  stock: 150,
}).save();

let newProduct5 = new Product({
  id: 5,
  name: "Tablet",
  description: "A lightweight and powerful tablet",
  price: 499.99,
  stock: 75,
}).save();

let newProduct6 = new Product({
  id: 6,
  name: "Camera",
  description: "A digital camera with high resolution",
  price: 599.99,
  stock: 80,
}).save();

let newProduct7 = new Product({
  id: 7,
  name: "Printer",
  description: "A wireless printer",
  price: 149.99,
  stock: 60,
}).save();

let newProduct8 = new Product({
  id: 8,
  name: "Monitor",
  description: "A 4K UHD monitor",
  price: 399.99,
  stock: 40,
}).save();

let newProduct9 = new Product({
  id: 9,
  name: "Keyboard",
  description: "A mechanical keyboard",
  price: 89.99,
  stock: 120,
}).save();

let newProduct10 = new Product({
  id: 10,
  name: "Mouse",
  description: "A wireless mouse",
  price: 49.99,
  stock: 180,
}).save();

// CRUD operations for Users

app.get("/users", async (req, res) => {
  let users = await User.find();
  res.status(200);
  res.json(users);
});

app.get("/users/:id", async (req, res) => {
  const user = await User.findOne({ id: req.params.id });
  if (!user) return res.status(404).json({ error: "User not found" });
  res.status(200).json(user);
});

app.post("/users", async (req, res) => {
  let newuser = await User({
    id: 20,
    name: "Ahmed",
    phone: "1234567890",
  }).save();
  res.status(201);
  res.json("User added successfully");
});

app.put("/users/:id", async (req, res) => {
  const updatedUser = await User.findOneAndUpdate(
    { id: req.params.id },  
    req.body,              
    { new: true }          
  );
  if (!updatedUser) return res.status(404).json({ error: "User not found" });
  res.status(200).json(updatedUser);
});

app.delete("/users/:id", async (req, res) => {
  const deletedUser = await User.findOneAndDelete({ id: req.params.id });
  if (!deletedUser) return res.status(404).json({ error: "User not found" });
  res.status(200).json({ message: "User deleted successfully" });
});

// CRUD operations for Products

app.get("/products", async (req, res) => {
  let products = await Product.find();
  res.status(200);
  res.json(products);
});

app.get("/products/:id", async (req, res) => {
  const product = await Product.findOne({ id: req.params.id });
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.status(200).json(product);
});

app.post("/products", async (req, res) => {
  let newproduct = await Product({
    id: 22,
    name: "Laptop",
    description: "A high-performance laptop",
    price: 999.99,
    stock: 50,
  }).save();
  res.status(201);
  res.json("Product added successfully");
});

app.put("/products/:id", async (req, res) => {
  const updatedProduct = await Product.findOneAndUpdate(
    { id: req.params.id }, 
    req.body,              
    { new: true }          
  );
  if (!updatedProduct)
    return res.status(404).json({ error: "Product not found" });
  res.status(200).json(updatedProduct);
});

app.delete("/products/:id", async (req, res) => {
 
    const deletedProduct = await Product.findOneAndDelete({
      id: req.params.id,
    });
    if (!deletedProduct)
      return res.status(404).json({ error: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });

});
let port = 3000
app.listen(port, () => {
  console.log("Server is running on port",port);
});

//node ecommerce.js
