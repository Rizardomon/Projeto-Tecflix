import React from 'react';

// import { Container } from './styles';

function FormField({ label, type, value, name, onChange }) {
  return <div>
    <label>
      {label}
      <input
        type={type}
        value={value}
        name={name}
        onChange={ onChange }
      />
    </label>
  </div>;
}

export default FormField;