exports.getScoreLabelDisfagia = (score) => {
    let out = 'Nenhuma anomalia detectada';

    if (score >= 168 && score <= 177) {
        out = 'Leve';
    } else if (score >= 139 && score <= 167) {
        out = 'Moderado';
    } else if (score <= 138) {
        out = 'Severo';
    }
    return out;
};

exports.getScoreLabelAspiracao = (score) => {
    let out = 'Nenhuma anomalia detectada';

    if (score >= 149 && score <= 169) {
        out = 'Leve';
    } else if (score >= 148 && score <= 141) {
        out = 'Moderado';
    } else if (score <= 140) {
        out = 'Severo';
    }
    return out;
};

exports.getMasaDefaultModel = () => {
    return {
        type: 'MASA',
        description: null,
        patient: {
            name: null,
            birthdate: null,
            description: null,
        },
        fields: [],
    }
};
