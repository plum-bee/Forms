import React from 'react'
import { useState } from 'react'

function useForm (initialData, validate) {
  const [formData, setFormData] = useState(initialData)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleBlur = event => {
    const { name } = event.target

    const errors = validate(formData)
    if (errors[name]) {
      setFormErrors(prevErrors => ({ ...prevErrors, [name]: errors[name] }))
    } else {
      setFormErrors(prevErrors => {
        const updatedErrors = { ...prevErrors }
        delete updatedErrors[name]
        return updatedErrors
      })
    }
  }

  const handleSubmit = callback => {
    console.log('handleSubmit')
  }

  const handleClear = () => {
    setFormData(initialData)
  }

  return {
    formData,
    formErrors,
    handleChange,
    handleSubmit,
    handleClear
  }
}

export default useForm
