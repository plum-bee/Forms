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
  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [username, setUsername] = useState()
  const [country, setCountry] = useState()
  const [DNI, setDNI] = useState()

  const availableCountries = ['Spain', 'Argentina']

  const clearForm = () => {
    setName('')
    setSurname('')
    setUsername('')
    setCountry('')
    setDNI('')
  }

  return (
    <form>
      <h1 data-testid='formtitle'>Minesweeper Form</h1>

      <TextField
        label='Name'
        value={name}
        placeholder='Enter your name'
        onChange={setName}
        validator={isUppercase}
        testid='name'
      />

      <TextField
        label='Surname'
        value={surname}
        placeholder='Enter your surname'
        onChange={setSurname}
        validator={isUppercase}
        testid={'surname'}
      />

      <TextField
        label='Username'
        value={username}
        placeholder='Enter your username'
        onChange={setUsername}
        validator={value => isValidUsername(name, value)}
        testid={'username'}
      />

      <SelectField
        label='Country'
        value={country}
        placeholder='Select your country'
        onChange={setCountry}
        options={[...availableCountries]}
        testid={'country'}
      />

      <TextField
        label='DNI'
        value={DNI}
        placeholder='Enter your DNI'
        onChange={setDNI}
        validator={value => isValidDNI(country, value)}
        testid={'dni'}
      />

      <FormButton
        buttonName='Submit'
        onClick={() => alert('Form submitted!')}
        isDisabled={true}
        testid={'submit'}
      />

      <FormButton
        buttonName='Clear'
        onClick={() => clearForm()}
        isDisabled={false}
        testid={'clear'}
      />
    </form>
  )
}

export default Form
