const path = require('path')
const fs = require('fs')

const p = path.join(
    path.dirname(process.mainModule.filename), 'data', 'product.json'
)

const getProductFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}


module.exports = class Product {
    constructor(id, title, imageURL, description, price) {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductFromFile(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this
                fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                    console.log(err)
                })
            } else {
                this.id = Math.random().toString();
                products.push(this)
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log(err)
                })
            }
        })
    }

    static fetchAll(cb) {
        getProductFromFile(cb)
    }

    static findById(id, cb) {
        getProductFromFile(products => {
            const product = products.find(p => p.id === id)
            cb(product)
        })
    }
    static delete(id, cb) {
        getProductFromFile(products => {
            const productIndex = products.findIndex(p => p.id === id)
            products.splice(productIndex, 1)
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err)
            })
            cb()
        })

    }
}