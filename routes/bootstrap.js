const express = require('express');
const router = express.Router();

router.get('/bootstrap.css', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/bootstrap.css')
});

router.get('/bootstrap-icons.css', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/bootstrap-icons.css')
});

router.get('/bootstrap.bundle.js', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/bootstrap.bundle.js')
});

router.get('/fonts/bootstrap-icons.woff', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/fonts/bootstrap-icons.woff')
});

router.get('/fonts/bootstrap-icons.woff2', (req, res) => {
    res.sendFile(__dirname+'/bootstrap/fonts/bootstrap-icons.woff2')
});

module.exports = router;