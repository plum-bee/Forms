import React from 'react'
import useForm from '../hooks/useForm'
import InputField from './InputField'
import SelectField from './SelectField'
import Button from './Button'
import validators from '../utils/validators'

function Form () {
  const initialData = {
    name: '',
    surname: '',
    username: '',
    country: '',
    dni: ''
  }

  const availableCountries = ['SPAIN', 'ARGENTINA']

  const {
    formData,
    formErrors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleClear
  } = useForm(initialData, validators.validate)

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

      <Button buttonName='Submit' onClick={handleSubmit} isDisabled />

      <Button buttonName='Clear' onClick={handleClear} />
    </form>
  )
}

export default Form
