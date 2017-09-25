"use strict";

const express = require('express');
const router = express.Router();
const mNpc = require('../models/npc');
const mItem = require('../models/item');
const mItemArmor = require('../models/item/armor');
const mItemContainer = require('../models/item/container');
const mItemDrink = require('../models/item/drink');
const mItemPill = require('../models/item/pill');
const mItemPotion = require('../models/item/potion');
const mItemScroll = require('../models/item/scroll');
const mItemStaff = require('../models/item/staff');
const mItemWand = require('../models/item/wand');
const mItemWeapon = require('../models/item/weapon');
const mAffect = require('../models/affect');
const mZone = require('../models/zone');

router.get('/add-by-one-line', function (req, res, next) {
    mZone.find({}, {}, {sort: {name: 1}}, function (err, zones) {
        res.render('add-item-by-one-line', {
            title: 'Шмотки',
            zones: zones,
            selected: req.session.itemZone || null
        });
    });
});

router.post('/add-by-one-line', function (req, res, next) {
    let item = new mItem();
    let info, data, temp, line, promise, unparsed = [];

    if (typeof(req.body.info) !== 'undefined' && req.body.info !== '') {
        info = req.body.info.split("\r\n");
        while (info.length > 0) {
            line = info.shift();
            if (line.length === 0) {
                continue;
            }
            if (/Объект '(.*?)' тип (.*?), экстра (.*?)\./.test(line)) {
                data = line.match(/Объект '(.*?)' тип (.*?), экстра (.*?)\./);
                item.id = data[1];
                item.type = data[2];
                item.extra = data[3].split(' ');
                switch (item.type) {
                    case 'armor':
                        item.data = new mItemArmor();
                        break;
                    case 'container':
                        item.data = new mItemContainer();
                        break;
                    case 'drink':
                        item.data = new mItemDrink();
                        break;
                    case 'pill':
                        item.data = new mItemPill();
                        break;
                    case 'potion':
                        item.data = new mItemPotion();
                        break;
                    case 'scroll':
                        item.data = new mItemScroll();
                        break;
                    case 'staff':
                        item.data = new mItemStaff();
                        break;
                    case 'wand':
                        item.data = new mItemWand();
                        break;
                    case 'weapon':
                        item.data = new mItemWeapon();
                        break;
                }
            } else if (/Вес (\d+), цена (\d+), уровень (\d+)(, материал: )?(.*?)\./.test(line)) {
                data = line.match(/Вес (\d+), цена (\d+), уровень (\d+)(, материал: )?(.*?)\./);
                item.weight = data[1];
                item.cost = data[2];
                item.level = data[3];
                item.material = data[5] || null;

            } else if (/Это может надеть:'(.*?)'\./.test(line)) {
                data = line.match(/Это может надеть:'(.*?)'\./);
                item.wear = data[1].split(' ');
            } else if (/Это может одеть:'(.*?)'\./.test(line)) {
                data = line.match(/Это может одеть:'(.*?)'\./);
                item.wear = data[1].split(' ');

            } else if (/ИзменЯет '(.*?)' на (-?\d+)\./.test(line)) {
                data = line.match(/ИзменЯет '(.*?)' на (-?\d+)\./);
                item.affects.push(new mAffect({affect: data[1], val: data[2]}));
            } else if (/Изменяет '(.*?)' на (-?\d+)\./.test(line)) {
                data = line.match(/Изменяет '(.*?)' на (-?\d+)\./);
                item.affects.push(new mAffect({affect: data[1], val: data[2]}));
            } else if (/Affects (.*?) by (-?\d+)\./.test(line)) {
                data = line.match(/Affects (.*?) by (-?\d+)\./);
                item.affects.push(new mAffect({affect: data[1], val: data[2]}));

            } else if (/Сопротивляемость к: (.*?)\./.test(line)) {
                data = line.match(/Сопротивляемость к: (.*?)\./);
                item.resists.push(data[1]);
            } else if (/Adds resistance to (.*?)\./.test(line)) {
                data = line.match(/Adds resistance to (.*?)\./);
                item.resists.push(data[1]);

            } else if (/Обнаружение: (.*?) detect\./.test(line)) {
                data = line.match(/Обнаружение: (.*?) detect\./);
                item.effects.push(data[1]);
            } else if (/Эффект: (.*?)\./.test(line)) {
                data = line.match(/Эффект: (.*?)\./);
                item.effects.push(data[1]);

            } else if (/Класс защиты - (-?\d+) от укола, (-?\d+) от удара, (-?\d+) от рубки, (-?\d+) от магии\./.test(line)) {
                data = line.match(/Класс защиты - (-?\d+) от укола, (-?\d+) от удара, (-?\d+) от рубки, (-?\d+) от магии\./);
                item.data.inject = data[1];
                item.data.kick = data[2];
                item.data.cut = data[3];
                item.data.magic = data[4];

            } else if (/Емкость: (\d+)# Максимум вес: (\d+)# флажки: (.*?)$/.test(line)) {
                data = line.match(/Емкость: (\d+)# Максимум вес: (\d+)# флажки: (.*?)$/);
                item.data.capacity = data[1];
                item.data.weightMax = data[2];
                item.data.flags = data[3];
            } else if (/Весовой модификатор: (\d+)%/.test(line)) {
                data = line.match(/Весовой модификатор: (\d+)%/);
                item.data.weightMod = data[1];

            } else if (/Это содержит ([^\s]*?) (.*?)\./.test(line)) {
                data = line.match(/Это содержит ([^\s]*?) (.*?)\./);
                item.data.color = data[1];
                item.data.liquid = data[2];

            } else if (/Уровень (\d+) заклинаний: (.*?)$/.test(line)) {
                data = line.match(/Уровень (\d+) заклинаний: (.*?)$/);
                item.data.level = data[1];
                temp = data[2].split("' '");
                item.data.spell = temp.map(function (val) {
                    return val.replace("'", '');
                });

            } else if (/Имеет (\d+) зарядов уровнем (\d+) '(.*?)'\./.test(line)) {
                data = line.match(/Имеет (\d+) зарядов уровнем (\d+) '(.*?)'\./);
                item.data.count = data[1];
                item.data.level = data[2];
                item.data.spell = data[3];
            } else if (/Имеет (\d+) зарЯдов уровнем (\d+) '(.*?)'\./.test(line)) {
                data = line.match(/Имеет (\d+) зарЯдов уровнем (\d+) '(.*?)'\./);
                item.data.count = data[1];
                item.data.level = data[2];
                item.data.spell = data[3];

            } else if (/Тип оружия - (.*?)\./.test(line)) {
                data = line.match(/Тип оружия - (.*?)\./);
                item.data.type = data[1];
            } else if (/Damage is (\d+)d(\d+) \(average (\d+)\)\./.test(line)) {
                data = line.match(/Damage is (\d+)d(\d+) \(average (\d+)\)\./);
                item.data.count = data[1];
                item.data.damage = data[2];
                item.data.average = data[3];
            } else if (/Наносимый урон (\d+)d(\d+) \(средний (\d+)\)\./.test(line)) {
                data = line.match(/Наносимый урон (\d+)d(\d+) \(средний (\d+)\)\./);
                item.data.count = data[1];
                item.data.damage = data[2];
                item.data.average = data[3];
            } else if (/Weapons flags: (.*?)\.?$/.test(line)) {
                data = line.match(/Weapons flags: (.*?)\.?$/);
                item.data.flags = data[1].split(' ');
            } else if (/Параметры оружия: (.*?)\.?$/.test(line)) {
                data = line.match(/Параметры оружия: (.*?)\.?$/);
                item.data.flags = data[1].split(' ');

            } else {
                unparsed.push(line);
                console.log('!!! UNPARSED LINE !!!');
                console.log(line);
            }
        }

        if (typeof(req.body.zone) !== 'undefined' && req.body.zone !== '' && req.body.zone !== 'null') {
            req.session.itemZone = req.body.zone;
            item.zone = req.body.zone;
        }
    
        if (typeof(req.body.rent) !== 'undefined') {
            item.rent = true;
        }
            
        if (unparsed.length > 0) {
            res.json({
                result: 'E',
                error: {type: 'U', data: unparsed}
            });
        } else {
            mItem.findOne({id: item.id})
            .then (function (data) {
                if (!data) {
                    return item.save();
                } else {
                    throw new Error('Duplicate!');
                }
            })
            .then(function(data) {
                res.json({result: 'O'});
            })
            .catch(function (err) {
                console.log(err);
                res.json({result: 'E', error: {type: 'M', data: err.message}});
            });
        }
    } else {
        res.json({});
    }
});

router.get('/', function (req, res, next) {
	mItem.find({}, function (err, docs) {
		res.render('npc', {
			title: 'Непись',
			npcs: docs
		});
	});
});

router.get('/all', function (req, res, next) {
	mItem.find({}, function (err, docs) {
		res.json({
			result: 'O',
			data: docs
		});
	});
});

router.get('/:id', function (req, res, next) {
	mItem.find({}, function (err, doc) {});
});

router.post('/', function (req, res, next) {
	let npc = new mItem();

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
	let promise = mItem.findOne({
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
	mItem.remove({
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
