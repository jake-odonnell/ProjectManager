const Product = require("../models/products.model")

//Create a new Product
module.exports.create = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => res.json({ message: "Something went wrong", error: err}))
}

//Get all Products
module.exports.findAll = (req, res) => {
    Product.find() 
        .then((allProducts) => res.json(allProducts))
        .catch((err) => res.json({message: "Something went wrong", error: err }))
    }

module.exports.findOne = (req, res) => {
    console.log(req.params.id)
    Product.findById(req.params.id)
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) => console.log({message: "Something went wrong", error: err}))
}