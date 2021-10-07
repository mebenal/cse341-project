const Products = require('../models/products')

exports.getIndex = (req, res, next) => {
    const tag = req.params.tag
    if (!tag) {
        Products.fetchAll(products => {
            res.render('pages/ta03', {
                title: 'Products',
                path: '/ta03',
                products: products
            })
        })
    } else {
        Products.findByTag(tag, products => {
            res.render('pages/ta03', {
                title: 'Search',
                path: '/ta03',
                products: products
            })
        })
    }
}

exports.postIndex = (req, res, next) => {
    const tag = req.body.tag
    if (tag) {
        res.redirect(`/ta03/${tag}`)
    } else {
        res.redirect('/ta03')
    }
}