const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const masaSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        default: 'MASA'
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: 'You must supply an author'
    },
    description: {
        type: String
    },
    score: {
      type: Number
    },
    patient: {
        birthdate: {
            type: Date
        },
        name: {
            type: String,
            required: 'Please Supply a name',
            trim: true
        },
        description: {
            type: String
        }
    },
    fields: [
        {
            name: {
                type: String,
            },
            label: {
                type: String,
            },
            chosen: {
                type: Number,
            },
            options: [
                {
                    name: {
                        type: String,
                    },
                    value: {
                        type: Number,
                    },
                }
            ]
        }
    ]
});

masaSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Masa', masaSchema);