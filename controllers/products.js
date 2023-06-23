const Product = require('./../models/product')

exports.getAddProduct = (req, res) => {
    res.render('add', { pageTitle: "Add Product" })
}
exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}
exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        console.log(products)
        res.render('shop', { prods: products, pageTitle: "Shop" });
    });
}