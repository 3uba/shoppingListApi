const ListController = require('../controllers/list.controller')

const router = require('express').Router()

router.post("/", ListController.create)
router.get("/", ListController.getAll)

module.exports = { router }