const router = require('express').Router()
const { authMiddleware } = require('../middlewares/authMiddleware')
const authControllers = require('../controllers/authControllers')
router.post('/admin-login', authControllers.admin_login)
router.post('/archi-login', authControllers.archi_login)
router.post('/archi-register', authControllers.archi_register)
router.get('/get-user', authMiddleware, authControllers.getUser)
router.post('/profile-image-upload', authMiddleware, authControllers.profile_image_upload)
router.post('/profile-info-add', authMiddleware, authControllers.profile_info_add)

module.exports = router