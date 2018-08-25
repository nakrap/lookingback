const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.bio = !isEmpty(data.bio) ? data.bio : '';

  if (!Validator.isLength(data.name, { min: 2 })) {
    errors.name = 'name needs to be between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'name is required';
  }

  if (Validator.isEmpty(data.bio)) {
    errors.bio = 'bio is required';
  }
  
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }
  // if(!isEmpty(data.website)) {
  //   if(!Validator.isURL(data.website)) {
  //     errors.website = 'not a valid url'
  //   }
  // }
   
  return {
    errors,
    isValid: isEmpty(errors)
  }
}