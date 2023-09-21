import { useState } from 'react'
import { checkFieldError, isUppercase } from '../utils/validators.js'

function useForm () {
  const [formData, setFormData] = useState({})
  const [validData, setValidData] = useState({})
  const [inputErrors, setInputErrors] = useState({})

  const validateFormData = (event, formData) => {
    const [name, value] = event.target
    let errorMessage = ''

    switch (name) {
      case 'name':
      case 'surname':
        if (!isUppercase(value)) {
          errorMessage = `${name} must be in uppercase`
        }
        break
      case 'username':
        break
      case 'country':
        break
      case 'dni':
        break
      default:
        break
    }

    setInputErrors(prevErrors => ({
      ...prevErrors,
      [name]: errorMessage
    }))
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    if (!(name in formData)) {
      setValidData({ ...validData, [name]: false })
    }
    console.log(validData)
  }

  const handleBlur = event => {
    const { id } = event.target
    const errorMessage = checkFieldError(id, formData)

    setInputErrors(prevErrors => ({
      ...prevErrors,
      [id]: errorMessage
    }))
  }

  const handleValidation = event => {}

  return {
    formData,
    validData,
    inputErrors,
    handleChange,
    handleBlur
  }
}

export default useForm
