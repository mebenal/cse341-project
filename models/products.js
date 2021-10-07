const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'items.json')

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent))
  })
}


module.exports = class Product {
  constructor(id, name, imageUrl, price, description) {
    this.id = id
    this.name = name;
    this.imageUrl = imageUrl
    this.description = description
    this.price = price
  }

  save() {
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(prod => prod.id === this.id)
        const updatedProducts = [...products]
        updatedProducts[existingProductIndex] = this
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err)
        })
      } else {
        this.id = Math.floor(Math.random() * 100000).toString();
        console.log(this)
        console.log(products)
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err)
        })
      }
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb)
  }

  static findByTag(tag, cb) {
    getProductsFromFile(products => {
      
      const product = products.filter(p => p.tags.includes(tag))
      cb(product)
    })
  }
}