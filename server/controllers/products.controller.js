const Product = require("../models/products.model")

//Create a new Product
module.exports.create = (req, res) => {
    console.log("Hello")
    Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .then(console.log('Made it here'))
        .catch((err) => res.json({ message: "Something went wrong", error: err}))
}

//Get all Products
module.exports.findAll = (req, res) => {
    Product.find() 
        .then((allProducts) => res.json(allProducts))
        .catch((err) => res.json({message: "Something went wrong", error: err }))
    }