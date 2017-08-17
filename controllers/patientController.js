const mongoose = require('mongoose');
const Patient = mongoose.model('Patient');

exports.save = async (p) => {
    console.log('p = ',p );
    try {
        let patient = await Patient.findOne({ name: p.name });
        if (!patient) {
            patient = await (new Patient(p)).save();
        }
        return patient;
    }
    catch(e) {
        console.log('there was an error');
        console.log(e);
    }
};

exports.patients = async (req, res) => {
    const patients = await Patient.find();
    res.json(patients);
};