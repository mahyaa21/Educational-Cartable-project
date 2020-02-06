const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email)) {
        errors.email = 'ایمیل نامعتبر است';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'ایمیل الزامی است';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'جداقل تعداد کاراکتر ۶ است';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'رمز عبور الزامی است';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}