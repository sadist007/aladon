'use strict';

/**
 * Мобы
 */

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Mixed = Schema.Types.Mixed;
const ObjectId = Schema.Types.ObjectId;

const Mob = new Schema({
    name: {
        type: String,
        default: null,
        trim: true,
        required: true
    },
    minLev: {
        type: Number,
        default: 1
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
    quest: [],
    note: {
        type: String,
        default: null,
        trim: true
    }
}, {
    id: false,
    versionKey: false,
    collection: 'npc'
});

module.exports = Mongoose.model('Npc', Npc);