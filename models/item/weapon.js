'use strict';

/**
 * Стурктура для оружия
 */

const Mongoose = require('mongoose');

const ItemWeapon = new Mongoose.Schema({

    /**
     * Тип оружия
     */
    type: {
        type: String,
        default: null
    },

    /**
     * Количество бросков кубика
     */
    count: {
        type: Number,
        default: 0
    },

    /**
     * Количество граней кубика
     */
    damage: {
        type: Number,
        default: 0
    },

    /**
     * Средний урон
     */
    average: {
        type: Number,
        default: 0
    },

    /**
     * Параметры оружия
     */
    flags: {
        type: [String],
        default: null
    }

}, {
    id: false,
    _id: false,
    versionKey: false
});

module.exports = Mongoose.model('ItemWeapon', ItemWeapon);