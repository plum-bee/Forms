import React from 'react'
import { useState, useEffect } from 'react'
import useForm from '../hooks/useForm.js'
import {
  isUppercase,
  isValidUsername,
  isValidCountry,
  isValidDNI
} from '../utils/validators.js'
import InputField from './InputField.jsx'

function Form () {
  const { formData, validData, inputErrors, handleChange, handleBlur } =
    useForm()

  // const [formData, setFormData] = useState({
  //   name: '',
  //   surname: '',
  //   username: '',
  //   country: '',
  //   dni: ''
  // })

  // const [validData, setValidData] = useState({
  //   name: false,
  //   surname: false,
  //   username: false,
  //   country: false,
  //   dni: false
  // })

  // const [inputErrors, setInputErrors] = useState({})

  // const handleChange = event => {
  //   const { name, value } = event.target
  //   setFormData(prevFormData => ({ ...prevFormData, [name]: value }))
  // }
  // const handleBlur = event => {
  //   const { id, value } = event.target
  //   const error = checkFieldError(id, value)

  //   setInputErrors(prevErrors => ({
  //     ...prevErrors,
  //     [id]: error
  //   }))
  // }

  const isFormValid = validData => {
    return Object.values(validData).every(value => value === true)
  }

  // useEffect(() => {
  //   setValidData({
  //     name: isUppercase(formData.name),
  //     surname: isUppercase(formData.surname),
  //     username: isValidUsername(formData.name, formData.username),
  //     country: isValidCountry(formData.country),
  //     dni: isValidDNI(formData.country, formData.dni)
  //   })
  // }, [formData])

  const clearForm = () => {}

  return (
    <form className='form-container'>
      <h1 className='form-title' data-testid='formtitle'>
        Minesweeper Form
      </h1>

      <InputField
        label='Name'
        id='name'
        name='name'
        placeholder='Enter your name'
        value={formData.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        isValid={validData.name}
        className={validData.name ? 'valid' : 'invalid'}
        error={inputErrors.name}
      />

      <label htmlFor='surname'>
        Surname:
        <input
          type='text'
          id='surname'
          name='surname'
          placeholder='Enter your surname'
          value={formData.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          is
          className={validData.surname ? 'valid' : 'invalid'}
          data-testid='surname'
        />
      </label>
      {inputErrors.surname && <p>{inputErrors.surname}</p>}

      <label htmlFor='username'>
        Username:
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Enter your username'
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
          className={validData.username ? 'valid' : 'invalid'}
          data-testid='username'
        />
      </label>
      {inputErrors.username && <p>{inputErrors.username}</p>}

      <label htmlFor='country'>
        Select an option:
        <select
          id='country'
          name='country'
          value={formData.country}
          onChange={handleChange}
          onBlur={handleBlur}
          className={validData.country ? 'valid' : 'invalid'}
          data-testid='country'
        >
          <option>Select your country</option>
          <option>Spain</option>
          <option>Argentina</option>
        </select>
      </label>
      {inputErrors.country && <p>{inputErrors.country}</p>}

      <label htmlFor='dni'>
        DNI:
        <input
          type='text'
          id='dni'
          name='dni'
          placeholder='Enter your DNI'
          value={formData.dni}
          onChange={handleChange}
          onBlur={handleBlur}
          className={validData.dni ? 'valid' : 'invalid'}
          data-testid='dni'
        />
      </label>
      {inputErrors.dni && <p>{inputErrors.dni}</p>}

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
