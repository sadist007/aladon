'use strict';

/**
 * Локации
 */

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Mixed = Schema.Types.Mixed;
const ObjectId = Schema.Types.ObjectId;
const mExit = require('../models/exit');

const Room = new Schema({
    name: {
        type: String,
        default: null,
        trim: true,
        required: true
    },
    zone: {
        type: ObjectId,
        default: null
    },
    exits: [mExit.Schema],
    floor: {
        type: Number,
        default: 0
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

module.exports = Mongoose.model('Room', Room);