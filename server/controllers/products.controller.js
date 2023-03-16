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
    Product.findById(req.params.id)
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) => res.json({message: "Something went wrong", error: err}))
}

module.exports.updateOne = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((updatedProduct) => res.json(updatedProduct))
        .catch((err) => res.json({message: "Something went wrong", error: err} ))
}

module.exports.deleteOne = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then((deletedProduct) => res.json(deletedProduct))
        .catch((err) => res.json(err))
}