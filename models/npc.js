'use strict';

/**
 * Мобы
 */

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Mixed = Schema.Types.Mixed;
const ObjectId = Schema.Types.ObjectId;

const Npc = new Schema({
    name: {
        type: String,
        default: null,
        trim: true,
        required: true
    },
    short: {
        type: String,
        default: null,
        trim: true
    },
    level: {
        type: Number,
        default: 1
    },
    align: {
        type: String,
        enum: ['e', 'n', 'g'],
        default: 'n'
    },
    agressive: {
        type: Boolean,
        default: false
    },
    support: {
        type: Boolean,
        default: false
    },
    invisible: {
        type: Boolean,
        default: false
    },
    hidden: {
        type: Boolean,
        default: false
    },
    summon: {
        type: Boolean,
        default: false
    },
    gate: {
        type: Boolean,
        default: false
    },
    zone: {
        type: ObjectId,
        default: null
    },
    note: {
        type: String,
        default: null
    }
}, {
    id: false,
    versionKey: false,
    collection: 'npc'
});

module.exports = Mongoose.model('Npc', Npc);