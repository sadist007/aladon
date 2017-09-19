'use strict';

/**
 * Стурктура для брони
 */

const Mongoose = require('mongoose');

const ItemArmor = new Mongoose.Schema({

    /**
     * Защита от укола
     */
    inject: {
        type: Number,
        default: 0,
        required: true
    },

    /**
     * Защита от удара
     */
    kick: {
        type: Number,
        default: 0,
        required: true
    },

    /**
     * Защита от рубки
     */
    cut: {
        type: Number,
        default: 0,
        required: true
    },

    /**
     * Защита от магии
     */
    magic: {
        type: Number,
        default: 0,
        required: true
    }

}, {
    id: false,
    _id: false,
    versionKey: false
});

module.exports = Mongoose.model('ItemArmor', ItemArmor);