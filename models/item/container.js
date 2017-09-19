'use strict';

/**
 * Стурктура для брони
 */

const Mongoose = require('mongoose');

const ItemContainer = new Mongoose.Schema({

    /**
     * Ёмкость
     */
    capacityt: {
        type: Number,
        default: 0,
        required: true
    },

    /**
     * Максимальный вес
     */
    weightMax: {
        type: Number,
        default: 0,
        required: true
    },

    /**
     * Флажки
     */
    flags: {
        type: [String],
        default: null
    },

    /**
     * Модификатор веса
     */
    weightMod: {
        type: Number,
        default: 0,
        required: true
    }

}, {
    id: false,
    _id: false,
    versionKey: false
});

module.exports = Mongoose.model('ItemContainer', ItemContainer);