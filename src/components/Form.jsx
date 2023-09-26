import React from 'react'
import useForm from '../hooks/useForm'
import InputField from './InputField'

function Form () {
  const initialData = {
    name: '',
    surname: '',
    username: '',
    country: '',
    dni: ''
  }

  const validate = formData => {
    const errors = {}

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
    </form>
  )
}

export default Form
