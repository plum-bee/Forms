import React from 'react'
import { useState, useEffect } from 'react'
import {
  isUppercase,
  isValidUsername,
  isValidCountry,
  isValidDNI
} from '../utils/validators.js'

function Form () {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    username: '',
    country: '',
    dni: ''
  })

  const [validData, setValidData] = useState({
    name: false,
    surname: false,
    username: false,
    country: false,
    dni: false
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }))
  }

  const isFormValid = validData => {
    return Object.values(validData).every(value => value === true)
  }

  useEffect(() => {
    setValidData({
      name: isUppercase(formData.name),
      surname: isUppercase(formData.surname),
      username: isValidUsername(formData.name, formData.username),
      country: isValidCountry(formData.country),
      dni: isValidDNI(formData.country, formData.dni)
    })
  }, [formData])

  const clearForm = () => {
    setFormData({
      name: '',
      surname: '',
      username: '',
      country: '',
      dni: ''
    })
  }

  return (
    <form>
      <h1 data-testid='formtitle'>Minesweeper Form</h1>

      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        id='name'
        name='name'
        placeholder='Enter your name'
        value={formData.name}
        onChange={handleChange}
        className={validData.name ? 'valid' : 'invalid'}
        data-testid='name'
      />

      <label htmlFor='surname'>Surname:</label>
      <input
        type='text'
        id='surname'
        name='surname'
        placeholder='Enter your surname'
        value={formData.surname}
        onChange={handleChange}
        className={validData.surname ? 'valid' : 'invalid'}
        data-testid='surname'
      />

      <label htmlFor='username'>Username:</label>
      <input
        type='text'
        id='username'
        name='username'
        placeholder='Enter your username'
        value={formData.username}
        onChange={handleChange}
        className={validData.username ? 'valid' : 'invalid'}
        data-testid='username'
      />

      <label htmlFor='country'>Select an option:</label>
      <select
        id='country'
        name='country'
        value={formData.country}
        onChange={handleChange}
        data-testid='country'
      >
        <option>Select your country</option>
        <option>Spain</option>
        <option>Argentina</option>
      </select>

      <label htmlFor='dni'>DNI:</label>
      <input
        type='text'
        id='dni'
        name='dni'
        placeholder='Enter your DNI'
        value={formData.dni}
        onChange={handleChange}
        className={validData.dni ? 'valid' : 'invalid'}
        data-testid='dni'
      />

      <button
        type='submit'
        data-testid='submit'
        disabled={!isFormValid(validData)}
      >
        Submit
      </button>

      <button type='reset' onClick={clearForm} data-testid='clear'>
        Clear
      </button>
    </form>
  )
}

export default Form
