import React from 'react'
import { useState, useEffect } from 'react'

function useForm (initialData, validate) {
  const [formData, setFormData] = useState(initialData)
  const [formErrors, setFormErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  const updateFormData = (name, value) => {
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const validateFormData = (name, value) => {
    const errors = validate({ ...formData, [name]: value })
    setFormErrors(errors)
  }

  const handleChange = event => {
    const { name, value } = event.target
    updateFormData(name, value)
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
