import React from 'react'
import useForm from '../hooks/useForm'
import InputField from './InputField'
import SelectField from './SelectField'

function Form () {
  const initialData = {
    name: '',
    surname: '',
    username: '',
    country: '',
    dni: ''
  }

  const availableCountries = ['SPAIN', 'ARGENTINA']

  const validateDniSpain = dni => {
    const letterArray = 'TRWAGMYFPDXBNJZSQVHLCKET'
    const regExPattern = /^\d{8}[A-Z]$/

    if (!regExPattern.test(dni)) return false

    const char = dni.charAt(8)
    const number = dni.substr(0, 8)
    return char === letterArray.charAt(number % 23)
  }

  const validateDniArgentina = dni => {
    const regExPattern = /^\d{8}$/
    return regExPattern.test(dni)
  }

  const validate = formData => {
    const errors = {}

    for (let fieldId in formData) {
      if (formData[fieldId].trim() === '') {
        errors[fieldId] = `${fieldId} field is required `
      } else if (formData[fieldId] !== formData[fieldId].toUpperCase()) {
        errors[fieldId] = `${fieldId} must be in uppercase `
      }
    }

    if (formData.username.includes(formData.name) && formData.name !== '') {
      errors.username = 'username cannot contain name'
    }

    if (formData.username.length > 10) {
      errors.username = 'username cannot have more than 10 chars'
    }

    // Validación del DNI
    if (formData.country === '') {
      if (formData.dni.trim() !== '') {
        errors.dni = 'Country selection is required'
      }
    } else if (
      formData.country === 'SPAIN' &&
      !validateDniSpain(formData.dni)
    ) {
      errors.dni = 'Invalid Spanish DNI'
    } else if (
      formData.country === 'ARGENTINA' &&
      !validateDniArgentina(formData.dni)
    ) {
      errors.dni = 'Invalid Argentinian DNI'
    }

    return errors
  }

  const { formData, formErrors, handleChange, handleBlur } = useForm(
    initialData,
    validate
  )

  return (
    <form>
      <InputField
        label='Name'
        id='name'
        name='name'
        placeholder='Enter your name'
        value={formData.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={formErrors.name}
      />

      <InputField
        label='Surname'
        id='surname'
        name='surname'
        placeholder='Enter your surname'
        value={formData.surname}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={formErrors.surname}
      />

      <InputField
        label='Username'
        id='username'
        name='username'
        placeholder='Enter your username'
        value={formData.username}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={formErrors.username}
      />

      <SelectField
        label='Country'
        id='country'
        name='country'
        placeholder='Select your country'
        value={formData.country}
        options={availableCountries}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={formErrors.country}
      />

      <InputField
        label='DNI'
        id='dni'
        name='dni'
        placeholder='Enter your DNI'
        value={formData.dni}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={formErrors.dni}
      />
    </form>
  )
}

export default Form
