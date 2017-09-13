'use strict';

/**
 * Игровые зоны
 */

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Mixed = Schema.Types.Mixed;
const ObjectId = Schema.Types.ObjectId;

const Zone = new Schema({
    name: {
        type: String,
        default: null,
        trim: true,
        required: true
    },
    minLev: {
        type: Number,
        default: 0
    },
    maxLev: {
        type: Number,
        default: 0
    },
    authors: {
        type: String,
        default: null,
        trim: true
    },
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

module.exports = Mongoose.model('Zone', Zone);