const { connection } = require("../database/db")

function ProductModel(product) {
    this.name = product.name
    this.quantity = product.quantity
    this.type = product.type
    this.mark = product.mark
}

ProductModel.create = (np, result) => {
    // const query = `// INSERT INTO list (name, quantity, type, mark) VALUES ("${np.name}", "${np.quantity}", "${np.type}", ${np.type})`

    connection.query("INSERT INTO list SET ?", np, (err, res) => {
        if (err) {
            console.error(err)
            result(err, null)
            return
        }

        console.log("Created tutorial: ", { id: res.insertId, ...np })
        result(null, { id: res.insertId, ...np })
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
        result({ message: "not found" }, null)
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

ProductModel.delete = (id, result) => {
    connection.query(`DELETE FROM list WHERE id = ?`, id, (err, res) => {
        if (err) {
            console.error(err)
            result(err, null)
            return
        }
        result(null, {message: "deleted successfully "})
    })
}

ProductModel.edit = (id, pr, result) => {
    connection.query(`UPDATE list SET name = ?, quantity = ?, type = ?, mark = ? WHERE id = ?`,
        [pr.name, pr.quantity, pr.type, pr.mark, id], (err, res) => {
        if (err) {
            console.error(err)
            result(err, null)
            return
        }
        if (res.affectedRows == 0) {
            result({message: "nothing updated"})
            return
        }
        result(null, {message: "updated successfully"})

    })
}

module.exports = ProductModel;
