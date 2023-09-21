import React from 'react'

function InputField ({
  label,
  id,
  name,
  placeholder,
  value,
  handleChange,
  handleBlur,
  isValid,
  error,
  onValidation
}) {
  if (isValid) {
    onValidation()
  }
  return (
    <label htmlFor={id}>
      {label}:
      <input
        type='text'
        id={id}
        name={id}
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
