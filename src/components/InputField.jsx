import React from 'react'

function InputField ({
  label,
  id,
  name,
  placeholder,
  value,
  handleChange,
  handleBlur,
  error
}) {
  return (
    <label htmlFor={id}>
      {label}:
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        data-testid={id}
      />
      {error && <div data-testid={`${id}-error`}>{error}</div>}
    </label>
  )
}

export default InputField
