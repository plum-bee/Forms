import React from 'react'
import { useState } from 'react'
import {
  isUppercase,
  isValidUsername,
  isValidDNI
} from '../utils/validators.js'

import TextField from './TextField.jsx'
import SelectField from './SelectField.jsx'
import FormButton from './FormButton.jsx'

function Form () {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    username: '',
    country: '',
    dni: ''
  })

  const [selectedCountry, setSelectedCountry] = useState('placeholder')

  const handleChange = event => {
    const { field, value } = event.target
    setFormData(prevFormData => ({ ...prevFormData, [field]: value }))
  }

  const handleDropdownChange = event => {
    setSelectedCountry(event.target.value)
  }

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
        value={formData.name}
        onChange={handleChange}
        data-testid='name'
      />

      <label htmlFor='surname'>Surname:</label>
      <input
        type='text'
        id='surname'
        name='surname'
        value={formData.surname}
        onChange={handleChange}
        data-testid='surname'
      />

      <label htmlFor='username'>Username:</label>
      <input
        type='text'
        id='username'
        name='username'
        value={formData.username}
        onChange={handleChange}
        data-testid='username'
      />

      <label>
        Select an option:
        <select
          value={selectedCountry}
          onChange={handleDropdownChange}
          data-testid='country'
        >
          <option value='placeholder'>Select your country</option>
          <option value='option2'>Spain</option>
          <option value='option3'>Argentina</option>
        </select>
      </label>

      <label htmlFor='dni'>DNI:</label>
      <input
        type='text'
        id='dni'
        name='dni'
        value={formData.dni}
        onChange={handleChange}
        data-testid='dni'
      />
    </form>
  )
}

export default Form
