'use strict';

/**
 * Стурктура для зелий
 */

const Mongoose = require('mongoose');

const ItemPotion = new Mongoose.Schema({

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

module.exports = Mongoose.model('ItemPotion', ItemPotion);