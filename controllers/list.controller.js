const ProductModel = require('../models/product.model')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty"})
    }

    const product = new ProductModel({
        name: req.body.name,
        quantity: req.body.quantity ?? '1',
        type: req.body.type ?? 'other',
        mark: req.body.mark ?? 0
    })

    ProductModel.create(product, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "creating failed"
            })
        }
        else {
            res.send(data)
        }
    })
}

exports.getAll = (req, res) => {
    ProductModel.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: "findAll failed"
            })
        } else {
            res.send(data)
        }
    })
}

exports.deleteById = (req, res) => {
    ProductModel.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "deleting failed"
            })
        } else {
            res.send(data)
        }
    })
}

exports.getById = (req, res) => {
    ProductModel.findById(req.params.id, (err,data) => {
        if (err) {
            res.status(500).send({
                message: "getById failed"
            })
        } else {
            res.send(data)
        }
    })
}

exports.updateById = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty"})
    }

    ProductModel.edit(req.params.id, new ProductModel(req.body), (err, data) => {
        if (err) {
            res.status(500).send({
                message: 'update failed'
            })
        } else {
            res.send(data)
        }
    })
}