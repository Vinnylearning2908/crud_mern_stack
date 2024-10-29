// Import các modules cần thiết
const express = require('express')     // Framework web cho Node.js
const mongoose = require('mongoose')   // ODM (Object Data Modeling) cho MongoDB
const cors = require('cors')           // Middleware để handle Cross-Origin Resource Sharing
const UserModel = require('./models/Users')

// Khởi tạo ứng dụng Express
const app = express()

// Middleware setup
app.use(cors())           // Enable CORS cho tất cả các routes
app.use(express.json())   // Parse JSON bodies trong requests

mongoose.connect("mongodb://127.0.0.1:27017/")

// POST method
app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// GET All method
app.get("/", (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// GET ONE method
app.get("/getUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// UPDATE method
app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {name: req.body.name, email: req.body.email, age: req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err));
})

// DELETE Method
app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(users => res.json(err))
})

// Khởi động server trên port 3001
app.listen(3001, () => {
    console.log(`Server running on port 3001`)
})