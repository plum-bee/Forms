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
      />
      {error && <div>{error}</div>}
    </label>
  )
}

export default InputField
