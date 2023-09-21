export const isUppercase = value => {
  return value && value === value.toUpperCase()
}

export const isValidUsername = (name, username) => {
  return (
    !username.includes(name) &&
    isUppercase(username) &&
    username.length <= 10 &&
    username.length > 0
  )
}

export const isValidDNI = (country, dni) => {
  let validationResult = false
  switch (country) {
    case 'Spain':
      validationResult = isSpanishDNIValid(dni)
      break
    case 'Argentina':
      validationResult = isArgentinaDNIValid(dni)
      break
    default:
      break
  }
  return validationResult
}

const isSpanishDNIValid = dni => {
  const dniLetters = 'TRWAGMYFPDXBNJZSQVHLCKET'
  const dniNumber = dni.substring(0, 8)
  const dniLetter = dni.substring(8, 9)
  return dniLetters[dniNumber % 23] === dniLetter
}

const isArgentinaDNIValid = dni => {
  return dni.length === 11 && !isNaN(dni)
}

export const isValidCountry = country => {
  return country === 'Spain' || country === 'Argentina'
}

export const checkFieldError = (id, formData) => {
  let errorMessage = ''
  let fieldValue = formData[id]

  if (fieldValue === '') {
    errorMessage = `${id} field is required.`
  } else {
    switch (id) {
      case 'name':
      case 'surname':
        if (fieldValue !== fieldValue.toUpperCase()) {
          errorMessage = `${id} must be in uppercase.`
        }
        break
      case 'username':
        if (fieldValue.length > 10) {
          errorMessage = `${id} must be shorter than 10 characters.`
        } else if (fieldValue !== fieldValue.toUpperCase()) {
          errorMessage = `${id} must be in uppercase.`
        } else if (!isValidUsername(formData.name, fieldValue)) {
          errorMessage = `${id} must not contain your name.`
        }
        break
      case 'dni':
        if (!isValidDNI(formData.country, fieldValue)) {
          errorMessage = `${id} is not valid.`
        }
        break
    }
  }
  return errorMessage
}
