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

async function post(req, res) {

    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'success'
    })

}

async function put(req, res) {
    
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: 'success',
        product,
    }) 

    /* const product = await ProductsModel.findOne({ _id: id })

    await product.updateOne(req.body)

    res.send({
        message: 'success',
        product,
    }) */

}

module.exports = {

    getAll,
    getById,
    post,
    put,

}