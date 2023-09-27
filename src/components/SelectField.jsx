import React from 'react'

function SelectField ({
  label,
  id,
  name,
  placeholder,
  value,
  options,
  handleChange,
  handleBlur,
  error
}) {
  const getClassName = (value, error) => {
    if (!value && !error) return ''
    return error ? 'invalid' : 'valid'
  }

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
          className={getClassName(value, error)}
          data-testid={id}
        >
          <option value='' data-testid={placeholder}>
            {placeholder}
          </option>
          {options.map(option => (
            <option key={option} value={option} data-testid={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      {error && <div data-testid={`${id}-error`}>{error}</div>}
    </div>
  )
}

export default SelectField
