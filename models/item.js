'use strict';

/**
 * Вещи
 */

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Mixed = Schema.Types.Mixed;
const ObjectId = Schema.Types.ObjectId;
const mAffect = require('../models/affect.js');

const Item = new Schema({
    name: {
        type: String,
        default: null,
        trim: true,
        required: true
    },
    type: {
        type: String,
        defailt: null,
        trim: true
    },
    slot: {
        type: String,
        defailt: null,
        trim: true
    },
    weight: {
        type: Number,
        default: 0
    },
    cost: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 0
    },
    material: {
        type: String,
        defailt: null,
        trim: true
    },
    isLimit: {
        type: Boolean,
        default: false
    }
    extra: [String],
    affects: [mAffect],
    effects: [String],
    zone: {
        type: String,
        default: null,
        trim: true
    },
    location: {
        type: String,
        default: null,
        trim: true
    },
    mob: {
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

module.exports = Mongoose.model('Item', Item);