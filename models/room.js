'use strict';

/**
 * Локации
 */

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Mixed = Schema.Types.Mixed;
const ObjectId = Schema.Types.ObjectId;

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
    exits: [],
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