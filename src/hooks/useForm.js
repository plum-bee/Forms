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

  const handleClear = () => {
    setFormData(initialData)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const formDataString = JSON.stringify(formData, null, 2)
    const newWindow = window.open('', '_blank')
    newWindow.document.write(`<pre>${formDataString}</pre>`)
  }

  return {
    formData,
    formErrors,
    handleChange,
    handleBlur,
    handleClear,
    handleSubmit
  }
}

export default useForm
