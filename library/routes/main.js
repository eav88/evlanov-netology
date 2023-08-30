const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная',
        iconpage:'bi bi-house'
    })
});

module.exports = router;