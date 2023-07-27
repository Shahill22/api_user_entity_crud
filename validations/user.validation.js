const Joi = require('joi');

const userSchema = {
    createUser: {
        body: Joi.object().keys({
            firstName: Joi.string().trim().min(3).max(50).trim().required(),
            lastName: Joi.string().default('-'),
            dob: Joi.date().required(),
            address: Joi.string().required(),
        }),
    },
};

module.exports = { userSchema };