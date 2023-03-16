const ProductController = require("../controllers/products.controller")

module.exports = app => {
    app.get("/api/products/all", ProductController.findAll);
    app.post("/api/products/new", ProductController.create);
    app.get("/api/products/:id", ProductController.findOne)
}