'use strict';

/**
 * Стурктура для волшебных палочек
 */

const Mongoose = require('mongoose');

const ItemWand = new Mongoose.Schema({

    /**
     * Количество зарядов
     */
    count: {
        type: Number,
        default: 0
    },

    /**
     * Уровень заклинания
     */
    level: {
        type: Number,
        default: 0
    },

    /**
     * Заклинание
     */
    spell: {
        type: String,
        default: null
    }

}, {
    id: false,
    _id: false,
    versionKey: false
});

module.exports = Mongoose.model('ItemWand', ItemWand);