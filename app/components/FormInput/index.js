import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Wrapper from './Wrapper';

function FormInput({ type, placeholder, onChange, value }) {
  return (
    <Wrapper>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Wrapper>
  );
}

FormInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default FormInput;
