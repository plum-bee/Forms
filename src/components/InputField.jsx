import React from 'react'

function InputField ({
  id,
  name,
  placeholder,
  value,
  handleChange,
  handleBlur,
  isValid,
  error
}) {
  return (
    <label htmlFor={id}>
      {name}:
      <input
        type='text'
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={isValid ? 'valid' : 'invalid'}
        data-testid={id}
      />
      {error && <p>{error}</p>}
    </label>
  )
}

export default InputField
