import React from 'react'
import { useState, useEffect } from 'react'

function useForm (initialData, validate) {
  const [formData, setFormData] = useState(initialData)
  const [formErrors, setFormErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
    const errors = validate({ ...formData, [name]: value })
    setFormErrors(errors)
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

  const handleClear = () => {
    setFormData(initialData)
  }

  useEffect(() => {
    const hasEmptyFields = Object.values(formData).some(value => value === '')
    setIsFormValid(Object.keys(formErrors).length === 0 && !hasEmptyFields)
  }, [formData, formErrors])

  return {
    formData,
    formErrors,
    handleChange,
    handleBlur,
    handleClear,
    isFormValid
  }
}

export default useForm
