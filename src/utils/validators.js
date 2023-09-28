import React from 'react'

const letterArray = 'TRWAGMYFPDXBNJZSQVHLCKET'

const validateDniSpain = dni => {
  const regExPattern = /^\d{8}[A-Z]$/
  return (
    regExPattern.test(dni) &&
    dni.charAt(8) === letterArray.charAt(dni.substr(0, 8) % 23)
  )
}

const validateDniArgentina = dni => {
  const regExPattern = /^\d{8}$/
  return regExPattern.test(dni)
}

const validate = formData => {
  const { username, name, dni, country } = formData
  const errors = {}

  // Validación de campos vacíos y formato en mayúsculas
  for (let fieldId in formData) {
    if (formData[fieldId].trim() === '') {
      errors[fieldId] = `${fieldId} field is required `
    } else if (formData[fieldId] !== formData[fieldId].toUpperCase()) {
      errors[fieldId] = `${fieldId} must be in uppercase `
    }
  }

  // Validaciones específicas entre 'name' y 'username'
  if (username.includes(name) && name !== '') {
    errors.username = 'username cannot contain name'
  }

  // Validaciones específicas para 'username'
  if (username.length > 10 && !errors.username) {
    errors.username = 'username cannot have more than 10 chars'
  }

  // Validaciones específicas para 'dni'
  if (dni !== dni.toUpperCase() && !errors.dni) {
    errors.dni = 'dni must be in uppercase'
  }
  if (country === '' && dni.trim() !== '' && !errors.dni) {
    errors.dni = 'Country selection is required'
  }
  if (country === 'SPAIN' && !validateDniSpain(dni) && !errors.dni) {
    errors.dni = 'Invalid Spanish DNI'
  }
  if (country === 'ARGENTINA' && !validateDniArgentina(dni) && !errors.dni) {
    errors.dni = 'Invalid Argentinian DNI'
  }

  return errors
}

const validators = {
  validateDniSpain,
  validateDniArgentina,
  validate
}

export default validators
