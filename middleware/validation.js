const { body, validationResult } = require('express-validator');

exports.validationSignUp = [
    // body('name', 'the name must at leat contain 5 characters').isEmpty().isLength({min:5}),
    body('password', " must at leat contain 5 characters").isEmpty().isLength({min:5}),
    // we can even add .isNumeric().isString()
    body('email', "the email must be email format").isEmpty().isEmail(),
    body('age', "Minimum age is 10 years").isEmpty().isNumeric({min:10}),
]

exports.validationSignIn = [
    body('password', " must at leat contain 5 characters").isEmpty().isLength({min:5}),
    // we can even add .isNumeric().isString()
    body('email', "the email must be email format").isEmpty().isEmail(),
]

exports.isValid= async (req, res,next) => {

try {
const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(400).json({ errors: errors.array() });
} next(); }
catch (error) {
res.status(400).send({msg:error})
}
}