'use strict';

/**
 * Affect structure
 */

const Mongoose = require('mongoose');

const Affect = new Mongoose.Schema({

    /**
     * What kind of parameter will be affected
     */
    affect: {
        type: String,
        default: null,
        required: true
    },

    /**
     * Affect value
     */
    val: {
        type: Number,
        default: 0,
        required: true
    }

}, {
    id: false,
    _id: false,
    versionKey: false
});

module.exports = Mongoose.model('Affect', Affect);