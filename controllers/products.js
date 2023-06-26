const Product = require('./../models/product')
const Card = require('./../models/card')

exports.getAddProduct = (req, res) => {
    res.render('admin/edit-product', { pageTitle: "Add Product", path: "/admin/add-product", editing: false, product: {} })
}
exports.updateProduct = (req, res) => {
    const editMode = req.body.productId ? true : false;
    let id;
    if (editMode) { id = req.body.productId }
    const updatedProduct = new Product(id, req.body.title, req.body.imageURL, req.body.description, req.body.price)
    updatedProduct.save()
    res.redirect('/products-list')
}
exports.deleteProduct = (req, res) => {
    const id = req.body.productId
    Product.delete(id, () => res.redirect('/products-list'))
}
exports.getEditProduct = (req, res) => {
    const editMode = req.query.edit;
    if (!editMode) { return res.redirect('/') }
    const productId = req.params.productId;
    Product.findById(productId, product => {
        res.render('admin/edit-product', { pageTitle: "Edit Product", path: "/admin/edit-product", editing: editMode, product: product })
    })
}

exports.addToCard = (req, res) => {
    Card.addProduct(req.body.productId)
    res.redirect('/card')
}
exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/products-list', { prods: products, pageTitle: "Products", path: "/products-list" });
    });
}
exports.getProductsAdmin = (req, res) => {
    Product.fetchAll(products => {
        res.render('admin/products', { prods: products, pageTitle: "Products", path: "/admin/products" });
    });
}
exports.getProductDetails = (req, res) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-details', { product: product, pageTitle: "Product Details", path: "/products" });
    })
}