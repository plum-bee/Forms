import React from 'react'

export default function SelectField ({
  label,
  value,
  onChange,
  options,
  testid
}) {
  const handleChange = input => {
    const value = input.target.value
    onChange(value)
  }

  return (
    <label>
      {label}:
      <select value={value} onChange={handleChange} data-testid={testid}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}
