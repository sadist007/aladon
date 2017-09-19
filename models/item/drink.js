'use strict';

/**
 * Стурктура для питья
 */

const Mongoose = require('mongoose');

const ItemDrink = new Mongoose.Schema({

    /**
     * Цвет
     */
    color: {
        type: String,
        default: null
    },

    /**
     * Жидкость
     */
    liquid: {
        type: String,
        default: null
    }

}, {
    id: false,
    _id: false,
    versionKey: false
});

module.exports = Mongoose.model('ItemDrink', ItemDrink);