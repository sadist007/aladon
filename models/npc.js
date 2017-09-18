'use strict';

/**
 * Мобы
 */

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Mixed = Schema.Types.Mixed;
const ObjectId = Schema.Types.ObjectId;

const Npc = new Schema({

    /**
     * Видимое имя
     */
    name: {
        type: String,
        default: null,
        trim: true,
        required: true
    },

    /**
     * Короткое имя
     */
    short: {
        type: String,
        default: null,
        trim: true
    },

    /**
     * Уровень
     */
    level: {
        type: Number,
        default: null
    },

    /**
     * Здоровье
     */
    hp: {
        type: Number,
        default: null
    },

    /**
     * Магия
     */
    mana: {
        type: Number,
        default: null
    },

    /**
     * Шаги
     */
    step: {
        type: Number,
        default: null
    },

    /**
     * Характер
     */
    align: {
        type: String,
        enum: ['e', 'n', 'g', null],
        default: null
    },

    /**
     * Агрессивность
     */
    agressive: {
        type: Boolean,
        default: null
    },

    /**
     * Бросается на помощь
     */
    support: {
        type: Boolean,
        default: null
    },

    /**
     * Невидимый
     */
    invisible: {
        type: Boolean,
        default: null
    },

    /**
     * Скрытый
     */
    hidden: {
        type: Boolean,
        default: null
    },
    
    /**
     * Своя санка
     */
    sanctuary: {
        type: Boolean,
        default: null
    },
    
    /**
     * Своя левитация
     */
    levitation: {
        type: Boolean,
        default: null
    },
    
    /**
     * Своя хаста
     */
    haste: {
        type: Boolean,
        default: null
    },

    /**
     * Можно ли призвать
     */
    summon: {
        type: Boolean,
        default: null
    },

    /**
     * Можно ли пройти вратами
     */
    gate: {
        type: Boolean,
        default: null
    },

    /**
     * Зона обитания
     */
    zone: {
        type: ObjectId,
        default: null
    },

    /**
     * Комментарии
     */
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