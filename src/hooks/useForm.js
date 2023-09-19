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
  const [inputErrors, setInputErrors] = useState({})

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
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
    inputErrors,
    handleChange,
    handleBlur
  }
}

export default useForm
