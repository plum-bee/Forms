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
    <form className='form-container'>
      <h1 className='form-title' data-testid='formtitle'>
        Minesweeper Form
      </h1>

      <label htmlFor='name'>
        Name:
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Enter your name'
          value={formData.name}
          onChange={handleChange}
          className={validData.name ? 'valid' : ''}
          data-testid='name'
        />
      </label>

      <label htmlFor='surname'>
        Surname:
        <input
          type='text'
          id='surname'
          name='surname'
          placeholder='Enter your surname'
          value={formData.surname}
          onChange={handleChange}
          className={validData.surname ? 'valid' : ''}
          data-testid='surname'
        />
      </label>

      <label htmlFor='username'>
        Username:
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Enter your username'
          value={formData.username}
          onChange={handleChange}
          className={validData.username ? 'valid' : ''}
          data-testid='username'
        />
      </label>

      <label htmlFor='country'>
        Select an option:
        <select
          id='country'
          name='country'
          value={formData.country}
          onChange={handleChange}
          className={validData.country ? 'valid' : ''}
          data-testid='country'
        >
          <option>Select your country</option>
          <option>Spain</option>
          <option>Argentina</option>
        </select>
      </label>

      <label htmlFor='dni'>
        DNI:
        <input
          type='text'
          id='dni'
          name='dni'
          placeholder='Enter your DNI'
          value={formData.dni}
          onChange={handleChange}
          className={validData.dni ? 'valid' : ''}
          data-testid='dni'
        />
      </label>

      <button
        type='submit'
        data-testid='submit'
        onClick={window.alert.bind(null, 'Form submitted!')}
        className='submit'
        disabled={!isFormValid(validData)}
      >
        Submit
      </button>

      <button
        type='reset'
        onClick={clearForm}
        className='clear'
        data-testid='clear'
      >
        Clear
      </button>
    </form>
  )
}

export default Form
