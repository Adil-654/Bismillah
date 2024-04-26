const express=require('express')

const router=express.Router()
const {home,registe,login}=require('../controllers/controller')
const auth=require('../controllers/controller')
const signupSchema=require('../validator/auth-validator')
const validate=require('../middleware/validate-middleware')
router.route('/').get(auth.home);

router.route('/register').post(auth.register)
router.route('/login').post(auth.login)

module.exports = router;