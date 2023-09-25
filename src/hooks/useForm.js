import React from 'react'
import { useState } from 'react'

function useForm () {
  const [formData, setFormData] = useState({})
  const [validData, setValidData] = useState([])

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleOnBlur = event => {
    const { name, className } = event.target
  }

  const updateFormErrors = (name, value) => {}
  return { formData, validData, handleChange, handleOnBlur }
}

export default useForm
