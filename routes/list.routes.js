const ListController = require('../controllers/list.controller')

const router = require('express').Router()

router.post("/", ListController.create)
router.get("/", ListController.getAll)
router.delete("/:id", ListController.deleteById)
router.get('/:id', ListController.getById)
router.put('/:id', ListController.updateById)

module.exports = { router }