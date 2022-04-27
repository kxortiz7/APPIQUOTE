const express = require('express')


// middlewares
const { userExists } = require('../middlewares/users.middlewares')


// controller
const { getAllUser, getUserById, createUser, deleteUser, updateUser } = require('../controllers/users.controller')


const router = express.Router()

router.get('/', getAllUser)
router.post('/', createUser)


router
    .route('/:id')
    .get(userExists, getUserById)
    .patch(userExists, updateUser)
    .delete(userExists, deleteUser)


module.exports = { userRouter: router }