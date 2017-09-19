'use strict';

/**
 * Стурктура для свитков
 */

const Mongoose = require('mongoose');

const ItemScroll = new Mongoose.Schema({

    /**
     * Уровень заклинаний
     */
    level: {
        type: Number,
        default: 0
    },

    /**
     * Заклинания
     */
    spell: {
        type: [String],
        default: null
    }

}, {
    id: false,
    _id: false,
    versionKey: false
});

module.exports = Mongoose.model('ItemScroll', ItemScroll);