const passport = require('passport');

exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
        return;
    }
    res.status(401).json({error: 'unauthorized'});
};

exports.login = (req, res) => {
    passport.authenticate('local', (err, user) => {
        if (err) {
            return res.json(err);
        }
        if (!user) {
            return res.status(400).json({message: 'No User'});
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.json(err);
            }
            res.json({
                isLogged: true,
                user: {
                    name: user.name,
                    email: user.email,
                },
            });
        });
    })(req, res);
};

exports.logout = (req, res) => {
    req.logout();
    res.json({ isLogged: false });
};