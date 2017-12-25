const express = require('express')
const router = express.Router()

const Sign = require('../controller/user')

    router.post('/signup',Sign.signUp)
    router.post('/signIn',Sign.signIn)

    
module.exports=router;