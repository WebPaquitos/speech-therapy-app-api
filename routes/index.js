const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const masaController = require('../controllers/masaController');
const patientController = require('../controllers/patientController');

const { catchErrors } = require('../handlers/errorHandlers');

// AUTH
router.post('/register',
    userController.validateRegister,
    userController.register,
    authController.login
);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

// MASA
router.get('/masa', authController.isLoggedIn, masaController.masaModel);
router.get('/masas/:id', authController.isLoggedIn, masaController.masaModelById);
router.get('/masas', catchErrors(masaController.masas));
router.post('/masa', masaController.save);

// PATIENT
router.get('/patients', authController.isLoggedIn, catchErrors(patientController.patients));
router.get('/patients/:id', authController.isLoggedIn, catchErrors(patientController.patient));

module.exports = router;