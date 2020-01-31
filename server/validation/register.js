
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

    if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'نام باید بین ۲ تا ۳۰ کاراکتر باشد';
    }
    
    if(Validator.isEmpty(data.name)) {
        errors.name = 'نام الزامی است';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'ایمیل نا معتبر است';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'ایمیل الزامی است';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'رمز عبور حداقل ۶ کارکتر است';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'رمز عبور الزامی است';
    }

    if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
        errors.password_confirm = 'رمز عبور حداقل ۶ کاراکتر است';
    }

    if(!Validator.equals(data.password, data.password_confirm)) {
        errors.password_confirm = 'رمز عبور و تکرار رمز عبور یکسان نیست';
    }

    if(Validator.isEmpty(data.password_confirm)) {
        errors.password_confirm = 'رمز عبور الزامیست';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}