const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const patientSchema = new Schema({
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
});

patientSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Patient', patientSchema);