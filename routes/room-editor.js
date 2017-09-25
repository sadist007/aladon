"use strict";

const express = require('express');
const router = express.Router();

router.get('/room-editor', function (req, res, next) {
    res.render('room-editor', {
        title: 'Локации'
    });
});

module.exports = router;
