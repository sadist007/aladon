'use strict';

/**
 * Вещи
 */

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Mixed = Schema.Types.Mixed;
const ObjectId = Schema.Types.ObjectId;
const mItemArmor = require('../models/item/armor');
const mItemContainer = require('../models/item/container');
const mItemDrink = require('../models/item/drink');
const mItemPill = require('../models/item/pill');
const mItemPotion = require('../models/item/potion');
const mItemScroll = require('../models/item/scroll');
const mItemStaff = require('../models/item/staff');
const mItemWand = require('../models/item/wand');
const mItemWeapon = require('../models/item/weapon');
const mAffect = require('../models/affect.js');

const Item = new Schema({

    /**
     *d Идентификатор
     * (что пишется при опознании предмета)
     */
    id: {
        type: String,
        default: null,
        trim: true
    },

    /**
     * Название
     * (когда предмет в инвентаре или одет на персонажа)
     */
    name: {
        type: String,
        default: null,
        trim: true
    },

    /**
     * Длинное название
     * (когда предмет лежит на земле)
     */
    long: {
        type: String,
        default: null,
        trim: true
    },

    /**
     * Тип
     */
    type: {
        type: String,
        defailt: null,
        trim: true
    },

    /**
     * Вес
     */
    weight: {
        type: Number,
        default: 0
    },

    /**
     * Цена
     */
    cost: {
        type: Number,
        default: 0
    },

    /**
     * Уровень
     */
    level: {
        type: Number,
        default: 0
    },

    /**
     * Материал
     */
    material: {
        type: String,
        defailt: null,
        trim: true
    },

    /**
     * Кто может одеть
     */
    wear: {
        type: [String],
        default: null
    },

    /**
     * За хранение предмета снимаются деньги
     */
    rent: {
        type: Boolean,
        default: false
    },

    /**
     * Признак лимитной вещи
     */
    limit: {
        type: Boolean,
        default: false
    },

    /**
     * Слот для одевания
     */
    slot: {
        type: String,
        defailt: null,
        trim: true
    },

    /**
     * Дополнительные данные в зависимости от типа приедмета
     */
    data: {
        type: Mixed,
        enum: [mItemArmor, mItemContainer, mItemDrink, mItemPill, mItemPotion, mItemScroll, mItemStaff, mItemWand, mItemWeapon, null],
        default: null
    },

    /**
     * Дополнительные флаги
     */
    extra: {
        type: [String],
        default: null
    },

    /**
     * Сопротивляемость
     */
    resists: {
        type: [String],
        default: null
    },

    /**
     * Влияние на характеристики персонажа
     */
    affects: {
        type: [mAffect.Schema],
        default: null
    },

    /**
     * Эффекты
     */
    effects: {
        type: [String],
        default: null
    },        

    /**
     * Зона
     */
    zone: {
        type: [ObjectId],
        default: null
    },

    /**
     * Магазин
     */
    shop: {
        type: [ObjectId],
        default: null
    },

    /**
     * Локация
     */
    room: {
        type: [ObjectId],
        default: null
    },

    /**
     * Моб
     */
    mob: {
        type: [ObjectId],
        default: null
    },

    /**
     * Заметки
     */
    note: {
        type: String,
        default: null,
        trim: true
    }
}, {
    id: false,
    versionKey: false,
    collection: 'item'
});

module.exports = Mongoose.model('Item', Item);