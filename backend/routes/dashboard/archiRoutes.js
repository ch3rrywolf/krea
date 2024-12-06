const router = require('express').Router()
const { authMiddleware } = require('../../middlewares/authMiddleware')
const archiController = require('../../controllers/dashboard/archiController')

router.get('/request-archi-get', archiController.get_archi_request)

module.exports = router