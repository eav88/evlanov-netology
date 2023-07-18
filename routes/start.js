const express = require('express')
const router = express.Router()

// Start
router.get('/', (req, res) => {
    res.send('<h1> Use current url </h1>')
    console.log('routes - Start')
})

module.exports = router