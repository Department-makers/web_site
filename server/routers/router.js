import Router from 'express'
//import controller from '.controllers/controller.js'
//const controller = require('..controllers/controller.js')

const router = new Router()

router.get('/registration/hash', controller.getPasswordHash)

//export default router