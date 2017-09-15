"use strict";

const express = require('express');
const router = express.Router();
const mZone = require('../models/zone.js');

router.get('/', function (req, res, next) {
	mZone.find({}, function (err, docs) {
		res.render('zone', {
			title: 'Зоны',
			zones: docs
		});
	});
});

router.get('/all', function (req, res, next) {
	mZone.find({}, function (err, docs) {
		res.json({
			result: 'O',
			data: docs
		});
	});
});

router.get('/:id', function (req, res, next) {
	mZone.find({}, function (err, doc) {});
});

router.post('/', function (req, res, next) {
	let zone = new mZone();

	zone.name = req.body.name;
	zone.minLev = req.body.minLev;
	zone.maxLev = req.body.maxLev;
	zone.authors = req.body.authors;
	zone.note = req.body.note;

	zone.save()
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
	let promise = mZone.findOne({
		_id: req.params.id
	}).exec();

	promise
		.then(function (zone) {
			if (zone === null) {
				throw new Error('Zone with id [' + req.params.id + '] did not found!');
			}

			zone.name = req.body.name;
			zone.minLev = req.body.minLev;
			zone.maxLev = req.body.maxLev;
			zone.authors = req.body.authors;
			zone.note = req.body.note;

			return zone.update().exec();
		})
		.catch(function (err) {
			res.json({
				result: 'E',
				message: err.message
			});
		});
});

router.delete('/:id', function (req, res, next) {
	mZone.remove({
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
