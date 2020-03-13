import React from 'react';
import ReactDOM from 'react-dom';
import FormValidationError from './FormValidationError';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormValidationError />, div);
  ReactDOM.unmountComponentAtNode(div);
});
