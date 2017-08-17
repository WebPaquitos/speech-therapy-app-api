const mongoose = require('mongoose');
const Patient = mongoose.model('Patient');

exports.save = async (p) => {
    try {
        let patient = await Patient.findOne({ id: p.id });
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
    const patients = await Patient.find({createdBy: req.user._id}, {_id: 0, __v: 0});
    res.json(patients);
};