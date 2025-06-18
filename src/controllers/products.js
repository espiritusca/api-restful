const ProductsModel = require('../models/products')

async function getAll(req, res) {

    const products = await ProductsModel.find()

    res.send(products)

}

async function getById(req, res) {
    
    const { id } = req.params /// query string (?id=123) usa req.query, quando vem no POST usa req.body

    const product = await ProductsModel.find({ _id: id })

    res.send(product)

}

module.exports = {

    getAll,
    getById,

}