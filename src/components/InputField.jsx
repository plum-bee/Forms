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
  const getClassName = (value, error) => {
    if (!value && !error) return ''
    return error ? 'invalid' : 'valid'
  }

  return (
    <label htmlFor={id} className='input-field'>
      {label}:
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        data-testid={id}
        className={getClassName(value, error)}
      />
      {error && (
        <div className='error' data-testid={`${id}-error`}>
          {error}
        </div>
      )}
    </label>
  )
}

export default InputField
