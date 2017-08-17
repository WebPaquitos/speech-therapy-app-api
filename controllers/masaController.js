const mongoose = require('mongoose');
const Masa = mongoose.model('Masa');
const promissify = require('es6-promisify');
const patientController = require('../controllers/patientController');

exports.masaModel = (req, res) => {
    res.json({
        type: 'MASA',
        description: null,
        patient: {
            name: null,
            birthdate: null,
            description: null,
        },
        fields: [
            {
                name: 'CapacidadeDeAlerta',
                label: 'Capacidade de Alerta',
                chosen: null,
                options: [
                    {
                        name: 'Sem resposta ao discurso',
                        value: 2
                    },
                    {
                        name: 'Dificuldade em despertar',
                        value: 5
                    },
                    {
                        name: 'Sonolento',
                        value: 8
                    },
                    {
                        name: 'Alerta',
                        value: 10
                    },
                ]
            },
            {
                name: 'Cooperacao',
                label: 'Cooperação',
                chosen: null,
                options: [
                    {
                        name: 'Não coopera',
                        value: 2
                    },
                    {
                        name: 'Relutante',
                        value: 5
                    },
                    {
                        name: 'Cooperação flutuante',
                        value: 8
                    },
                    {
                        name: 'Cooperante',
                        value: 10
                    },
                ]
            },
            {
                name: 'Compreensao',
                label: 'Compreensão',
                chosen: null,
                options: [
                    {
                        name: 'Sem resposta ao discurso',
                        value: 2
                    },
                    {
                        name: 'Resposta motora ocasional',
                        value: 4
                    },
                    {
                        name: 'Segue uma conversa simples com repetição',
                        value: 6
                    },
                    {
                        name: 'Segue uma conversa simples, com pequenas dificuldades',
                        value: 8
                    },
                    {
                        name: 'Sem perturbação',
                        value: 10
                    },
                ]
            },
            {
                name: 'Respiracao',
                label: 'Respiração',
                chosen: null,
                options: [
                    {
                        name: 'Infecção Respiratória',
                        value: 2
                    },
                    {
                        name: 'Crepitações basais grosseiras/Fisioterapia Respiratória',
                        value: 4
                    },
                    {
                        name: 'Crepitações Basais Finas',
                        value: 6
                    },
                    {
                        name: 'Alt. das Vias Aéreas Superiores/Outra condição',
                        value: 8
                    },
                    {
                        name: 'Sem Infecção Respiratória',
                        value: 10
                    },
                ]
            },
            {
                name: 'CapacidadeRespiratoriaParaADegluticao',
                label: 'Capacidade Respiratória para a deglutição',
                chosen: null,
                options: [
                    {
                        name: 'Sem controlo independente',
                        value: 1
                    },
                    {
                        name: 'Algum controlo/Incoordenação',
                        value: 3
                    },
                    {
                        name: 'Capaz de coordenar respiração/deglutição',
                        value: 5
                    },
                ]
            },
            {
                name: 'Afasia',
                label: 'Afasia',
                chosen: null,
                options: [
                    {
                        name: 'Impossível de Avaliar',
                        value: 1
                    },
                    {
                        name: 'Inexactidão significante, respostas parciais ou irrelevantes',
                        value: 2
                    },
                    {
                        name: 'Discurso grosseiro, defeito na exactidão e no discurso por comando',
                        value: 3
                    },
                    {
                        name: 'Perturbação do discurso por comando (exactidão e velocidade), sem procura de movimentos',
                        value: 4
                    },
                    {
                        name: 'Sem perturbação',
                        value: 5
                    },
                ]
            },
            {
                name: 'Dispraxia',
                label: 'Dispraxia',
                chosen: null,
                options: [
                    {
                        name: 'Impossível de Avaliar',
                        value: 1
                    },
                    {
                        name: 'Inexactidão significante, respostas parciais ou irrelevantes',
                        value: 2
                    },
                    {
                        name: 'Discurso grosseiro, defeito na exactidão e no discurso por comando',
                        value: 3
                    },
                    {
                        name: 'Perturbação do discurso por comando (exactidão e velocidade), sem procura de movimentos',
                        value: 4
                    },
                    {
                        name: 'Sem perturbação',
                        value: 5
                    },
                ]
            },
            {
                name: 'Disartria',
                label: 'Disartria',
                chosen: null,
                options: [
                    {
                        name: 'Impossível de Avaliar',
                        value: 1
                    },
                    {
                        name: 'Discurso ininteligível',
                        value: 2
                    },
                    {
                        name: 'Discurso inteligível, mas com defeitos óbvios',
                        value: 3
                    },
                    {
                        name: 'Lentidão com ocasionais hesitações e sons indistintos',
                        value: 4
                    },
                    {
                        name: 'Sem perturbação',
                        value: 5
                    },
                ]
            },
            {
                name: 'Saliva',
                label: 'Saliva',
                chosen: null,
                options: [
                    {
                        name: 'Baba-se sempre',
                        value: 1
                    },
                    {
                        name: 'Por vezes, baba-se de forma consistente',
                        value: 2
                    },
                    {
                        name: 'Por vezes, baba-se',
                        value: 3
                    },
                    {
                        name: 'Expectoração espumosa para uma chávena',
                        value: 4
                    },
                    {
                        name: 'Sem perturbação',
                        value: 5
                    },
                ]
            },
            {
                name: 'VedamentoLabial',
                label: 'Vedamento Labial',
                chosen: null,
                options: [
                    {
                        name: 'Sem encerramento/Impossível de avaliar',
                        value: 1
                    },
                    {
                        name: 'Encerramento incompleto',
                        value: 2
                    },
                    {
                        name: 'Fraqueza unilateral, pobre manutenção',
                        value: 3
                    },
                    {
                        name: 'Ligeira perturbação, ocasional vazamento',
                        value: 4
                    },
                    {
                        name: 'Sem perturbação',
                        value: 5
                    },
                ]
            },
            {
                name: 'MovimentosDaLingua',
                label: 'Movimentos da Língua',
                chosen: null,
                options: [
                    {
                        name: 'Sem movimentos',
                        value: 2
                    },
                    {
                        name: 'Movimentos mínimos',
                        value: 4
                    },
                    {
                        name: 'Movimentos incompletos',
                        value: 6
                    },
                    {
                        name: 'Ligeira perturbação',
                        value: 8
                    },
                    {
                        name: 'Realização completa dos movimentos/Sem perturbação',
                        value: 10
                    },
                ]
            },
            {
                name: 'ForcaDaLingua',
                label: 'Força da Língua',
                chosen: null,
                options: [
                    {
                        name: 'Muita fraqueza',
                        value: 2
                    },
                    {
                        name: 'Fraqueza unilateral',
                        value: 5
                    },
                    {
                        name: 'Ligeira fraqueza',
                        value: 8
                    },
                    {
                        name: 'Sem perturbação',
                        value: 10
                    },
                ]
            },
            {
                name: 'CoordenacaoDaLingua',
                label: 'Coordenação da Língua',
                chosen: null,
                options: [
                    {
                        name: 'Sem movimentos/Impossível de avaliar',
                        value: 2
                    },
                    {
                        name: 'Elevada Incoordenação',
                        value: 5
                    },
                    {
                        name: 'Ligeira Incoordenação',
                        value: 8
                    },
                    {
                        name: 'Sem perturbação',
                        value: 10
                    },
                ]
            },
            {
                name: 'PreparacaoOral',
                label: 'Preparação Oral',
                chosen: null,
                options: [
                    {
                        name: 'Impossível de avaliar',
                        value: 2
                    },
                    {
                        name: 'Sem formação do bolo/Sem tentativa',
                        value: 4
                    },
                    {
                        name: 'Movimentos de mastigação mínimos/projecção anterior do bolo pela língua',
                        value: 6
                    },
                    {
                        name: 'Vedamento labial ou da língua, escape do bolo',
                        value: 8
                    },
                    {
                        name: 'Sem perturbação',
                        value: 10
                    },
                ]
            },
            {
                name: 'Vomito',
                label: 'Vómito',
                chosen: null,
                options: [
                    {
                        name: 'Sem vómito',
                        value: 1
                    },
                    {
                        name: 'Ausência Unilateral',
                        value: 2
                    },
                    {
                        name: 'Diminuição unilateral',
                        value: 3
                    },
                    {
                        name: 'Diminuição bilateral',
                        value: 4
                    },
                    {
                        name: 'Sem pert/Hiperreflexia',
                        value: 5
                    },
                ]
            },
            {
                name: 'Palato',
                label: 'Palato',
                chosen: null,
                options: [
                    {
                        name: 'Não se estende ou eleva',
                        value: 2
                    },
                    {
                        name: 'Movimentos mínimos/regurgitação nasal/escape de ar',
                        value: 4
                    },
                    {
                        name: 'Fraqueza unilateral',
                        value: 6
                    },
                    {
                        name: 'Ligeira assimetria, móvel',
                        value: 8
                    },
                    {
                        name: 'Sem perturbação',
                        value: 5
                    },
                ]
            },
        ],
    });
};

exports.save = async (req, res, next) => {
    const fields = req.body.fields;
    req.body.score = fields.reduce((previous, field) => { return previous + Number(field.chosen); }, 0);
    req.body.author = req.user._id;
    req.body.patient.createdBy = req.user._id;
    try {
        const masa = await (new Masa(req.body)).save();
        await patientController.save(req.body.patient);
        res.status(201).json(masa);
    }
    catch(e) {
        console.log('there was an error');
        console.log(e);
        res.status(400).json(e);
    }
};

exports.masas = async (req, res) => {
    const masas = await Masa.find({author: req.user.id});
    res.json(masas);
};