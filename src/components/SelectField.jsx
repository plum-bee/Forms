import React from 'react';

function SelectField({
  label,
  id,
  options,
  name,
  placeholder,
  value,
  handleChange,
  handleBlur,
  isValid,
  error
}) {
  return (
    <div>
      <label htmlFor={id}>
        {label}:
        <select
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={isValid ? 'valid' : 'invalid'}
          data-testid={id}
        >
          <option value=''>{placeholder}</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      {error && <p>{error}</p>}
    </div>
  );
}

export default SelectField;
