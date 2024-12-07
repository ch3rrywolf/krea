const router = require('express').Router()
const { authMiddleware } = require('../../middlewares/authMiddleware')
const archiController = require('../../controllers/dashboard/archiController')

router.get('/request-archi-get', authMiddleware, archiController.get_archi_request)
router.get('/get-archi/:archiId', authMiddleware, archiController.get_archi)
router.post('/archi-status-update', authMiddleware, archiController.archi_status_update)

module.exports = router