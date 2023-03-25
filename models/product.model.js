const {connection} = require("../database/db")

const newProduct = (product) => {
    this.name = product.name
    this.quantity = product.quantity
    this.type = product.type
}

const ProductModel = (product) => {
    this.name = product.name
    this.quantity = product.quantity
    this.type = product.type
    this.mark = product.mark
}

ProductModel.create = (newProduct, result) => {
    connection.query("INSERT INTO list SET ?", newProduct, (err, res) => {
        if (err)  {
            console.error(err)
            result(err, null)
            return
        }

        console.log("Created tutorial: ", {id: res.insertId, ...newProduct})
        result(null, { id: res.insertId, ...newProduct })
    })
}

ProductModel.findById = (id, result) => {
    connection.query(`SELECT * FROM list WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.error(err)
            result(err, null)
            return
        }
        if (res.length) {
            result(null, res[0])
            return
        }
        result({ message: "not found"}, null)
    })
}

ProductModel.getAll = (result) => {
    connection.query("SELECT * FROM list", (err, res) => {
        if (err) {
            console.log(err)
            result(err, null)
            return
        }

        result(null, res)
    })
}