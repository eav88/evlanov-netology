const express = require('express')
const router = express.Router()
const fileMulter = require('../routes/bookfile.js')

router.post('/upload', 
    fileMulter.single('bookfilekey'),
    (req, res) => {
        if(req.file){
            const {path} = req.file
            res.json({path})
        }
        res.json()
    })


router.post('/uptest', 
fileMulter.single('bookfilekey'),
(req, res) => {
    if(req.file){
        const {path} = req.file
        res.json(req.file)
        
    }
    res.json()
})

    
module.exports = router