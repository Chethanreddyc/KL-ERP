const { signup, login } = require('../controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/Authvalidation');

const router = require('express').Router();

router.post('/login',loginValidation,login);
router.post('/signup',signupValidation,signup);

module.exports = router;