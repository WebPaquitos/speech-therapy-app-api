const mongoose = require('mongoose');
const Masa = mongoose.model('Masa');
const promissify = require('es6-promisify');
const patientController = require('../controllers/patientController');
const { getMasaDefaultModel, getScoreLabelAspiracao, getScoreLabelDisfagia } = require('../utils/masaUtils');

exports.masaModel = (req, res) => {
    res.json(getMasaDefaultModel());
};

exports.save = async (req, res, next) => {
    const fields = req.body.fields;
    const score = fields.reduce((previous, field) => {
        return previous + Number(field.chosen);
    }, 0);
    req.body.score = score;
    req.body.scoreLabelDisfagia = getScoreLabelDisfagia(score);
    req.body.scoreLabelAspiracao = getScoreLabelAspiracao(score);
    req.body.author = req.user._id;
    req.body.patient.createdBy = req.user._id;
    try {
        const masa = await (new Masa(req.body)).save();
        await patientController.save(req.body.patient);
        res.status(201).json(masa);
    }
    catch (e) {
        console.log('there was an error');
        console.log(e);
        res.status(400).json(e);
    }
};

exports.masas = async (req, res) => {
    const patientIdToSearch = req.query.patientid;
    const query = patientIdToSearch ? { author: req.user.id, 'patient.id': patientIdToSearch } : { author: req.user.id };
    const masas = await Masa.find(query);
    res.json(masas);
};

exports.masaModelById = async (req, res) => {
    const masa = await Masa.findOne({ _id: req.params.id });
    res.json(masa);
};
