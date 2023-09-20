import { useState } from 'react'
import { checkFieldError } from '../utils/validators.js'

function useForm () {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    username: '',
    country: '',
    dni: ''
  })

  const [validData, setValidData] = useState({
    name: false,
    surname: false,
    username: false,
    country: false,
    dni: false
  })

  const [inputErrors, setInputErrors] = useState({})

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    if (checkFieldError(value, formData) === '') {
      setValidData({ ...validData, [name]: true })
    }
  }

  const handleBlur = event => {
    const { id } = event.target
    const errorMessage = checkFieldError(id, formData)

    setInputErrors(prevErrors => ({
      ...prevErrors,
      [id]: errorMessage
    }))
  }

  return {
    formData,
    validData,
    inputErrors,
    handleChange,
    handleBlur
  }
}

export default useForm
