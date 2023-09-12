import React from 'react'
import { useState } from 'react'

export default function TextField ({
  label,
  value,
  onChange,
  validator,
  testid
}) {
  const [valid, setValid] = useState(false)

  const handleChange = input => {
    const value = input.target.value
    onChange(value)
    setValid(validator(value))
  }

  return (
    <label>
      {label}:
      <input
        value={value}
        onChange={handleChange}
        className={valid ? 'valid' : 'invalid'}
        data-testid={testid}
      />
    </label>
  )
}
