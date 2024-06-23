import express from 'express'

import url from '../controllers/UrlController.js'
const router=express.Router()
router.get('/',function(req,res){
    res.send("Yes the server is live🚗🚗🚗🚗🚗🚗🚗🚗🚗")
})
router.get('/url/:shortUrl',url.show);
router.post('/url',url.create);

export default router;