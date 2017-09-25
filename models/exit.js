'use strict';

/**
 * Стурктура выхода из комнаты
 */

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Exit = new Mongoose.Schema({

    /**
     * Направление
     */
    direction: {
        type: String,
        enum: ['n', 'w', 's', 'e', 'u', 'd', null],
        default: null
    },

    /**
     * Назначение
     */
    room: {
        type: ObjectId,
        default: null
    }

}, {
    id: false,
    _id: false,
    versionKey: false
});

module.exports = Mongoose.model('Exit', Exit);