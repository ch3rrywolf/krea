const router = require('express').Router()
const { authMiddleware } = require('../middlewares/authMiddleware')
const authControllers = require('../controllers/authControllers')
router.post('/admin-login', authControllers.admin_login)
router.post('/archi-register', authControllers.archi_register)
router.get('/get-user', authMiddleware, authControllers.getUser)

module.exports = router