import React from 'react'

import { useState } from 'react'
import {
  isUppercase,
  isValidUsername,
  isValidDNI
} from '../utils/validators.js'

import TextField from './TextField.jsx'
import SelectField from './SelectField.jsx'

function Form () {
  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [username, setUsername] = useState()
  const [country, setCountry] = useState()
  const [DNI, setDNI] = useState()

  const availableCountries = ['Spain', 'Argentina']

  return (
    <div>
      <h1 data-testid='formtitle'>Minesweeper Form</h1>

      <TextField
        label='Name'
        value={name}
        onChange={setName}
        validator={isUppercase}
        testid='name'
      />

      <TextField
        label='Surname'
        value={surname}
        onChange={setSurname}
        validator={isUppercase}
        testid={'surname'}
      />

      <TextField
        label='Username'
        value={username}
        onChange={setUsername}
        validator={value => isValidUsername(name, value)}
        testid={'username'}
      />

      <SelectField
        label='Country'
        value={country}
        onChange={setCountry}
        options={[...availableCountries]}
        testid={'country'}
      />

      <TextField
        label='DNI'
        value={DNI}
        onChange={setDNI}
        validator={value => isValidDNI(country, value)}
        testid={'dni'}
      />
    </div>
  )
}

export default Form
