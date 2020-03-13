import React from 'react';
import './FormValidationError.css';

const FormValidationError = props => {
  return props.message ? <p className="validation">{props.message}</p> : null;
};

export default FormValidationError;
