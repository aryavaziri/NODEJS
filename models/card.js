const path = require('path')
const fs = require('fs')

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'card.json')

module.exports = class Card {
    static addProduct(id) {
        fs.readFile(p, (err, fileContent) => {
            let card = { products: [], totalPrice: 0 }
            if (!err) {
                card = JSON.parse(fileContent);
            }
            const existingProductIndex = card.products.findIndex(prod => prod.id === id)
            const existingProduct = card.products[existingProductIndex]
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = existingProduct.qty + 1;
                card.products = [...card.products]
                card.products[existingProductIndex] = updatedProduct
            } else {
                updatedProduct = { id: id, qty: 1 }
                card.products = [...card.products, updatedProduct]
            }
            fs.writeFile(p, JSON.stringify(card), err => {
                console.log(err)
            })
        })
    }
}