"use strict";

const express = require('express');
const router = express.Router();
const mNpc = require('../models/npc');
const mZone = require('../models/zone');

router.get('/add-by-one-line', function (req, res, next) {
    mZone.find({}, {}, {sort: {name: 1}}, function (err, zones) {
        res.render('add-npc-by-one-line', {
            title: 'Непись',
            zones: zones,
            selected: req.session.zone || null
        });
    });
});

router.post('/add-by-one-line', function (req, res, next) {
    let npc = new mNpc();

    if (typeof(req.body.name) !== 'undefined' && req.body.name !== '') {
        if (req.body.name.indexOf(':') !== -1) {
            let result = req.body.name.split(':');
            npc.align = result[0];
            npc.level = result[1];
            npc.name = result[2];
        } else {
            npc.name = req.body.name;
        }
    }

    if (typeof(req.body.zone) !== 'undefined' && req.body.zone !== '' && req.body.zone !== 'null') {
        req.session.zone = req.body.zone;
        npc.zone = req.body.zone;
    }

    npc.save(function (err) {
        if (err) {
            console.log(err);
        }
    });

    res.redirect('/npc/add-by-one-line');
});

router.get('/', function (req, res, next) {
	mNpc.find({}, function (err, docs) {
		res.render('npc', {
			title: 'Непись',
			npcs: docs
		});
	});
});

router.get('/all', function (req, res, next) {
	mNpc.find({}, function (err, docs) {
		res.json({
			result: 'O',
			data: docs
		});
	});
});

router.get('/:id', function (req, res, next) {
	mNpc.find({}, function (err, doc) {});
});

router.post('/', function (req, res, next) {
	let npc = new mNpc();

	npc.save()
		.then(function (data) {
			res.json({
				result: 'O'
			});
		})
		.catch(function (err) {
			console.log(err);
			res.json({
				result: 'E',
				message: err.message
			});
		});
});

router.put('/:id', function (req, res, next) {
	let promise = mNpc.findOne({
		_id: req.params.id
	}).exec();

	promise
		.then(function (npc) {
			if (npc === null) {
				throw new Error('Zone with id [' + req.params.id + '] did not found!');
			}

			return npc.update().exec();
		})
		.catch(function (err) {
			res.json({
				result: 'E',
				message: err.message
			});
		});
});

router.delete('/:id', function (req, res, next) {
	mNpc.remove({
			_id: req.params.id
		})
		.then(function (data) {
			res.json({
				result: 'O'
			});
		})
		.catch(function (err) {
			res.json({
				result: 'E',
				message: err.message
			});
		})
});

module.exports = router;
