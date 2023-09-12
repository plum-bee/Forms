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
    <label data-testid={testid}>
      {label}:
      <select value={value} onChange={handleChange}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}
