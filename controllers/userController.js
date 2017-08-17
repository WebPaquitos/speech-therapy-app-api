const mongoose = require('mongoose');
const User = mongoose.model('User');
const promissify = require('es6-promisify');

exports.validateRegister = (req, res, next) => {
    console.log('req.body = ', req.body);
    req.sanitizeBody('name');
    req.checkBody('name', 'You must supply a name').notEmpty();
    req.checkBody('email', 'Email not valid').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    });
    req.checkBody('password', 'Password can not be blank').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
        console.log('errors = ', errors);
        res.json(errors);
        return;
    }
    next();
};

exports.register = async (req, res, next) => {
    const user = new User( {email: req.body.email, name: req.body.name});
    const register = promissify(User.register, User);
    try {
        await register(user, req.body.password);
        next();
    }
    catch(e) {
        console.log('there was an error');
        console.log(e);
        res.status(400).json(e);
    }
};