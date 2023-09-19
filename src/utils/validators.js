export const isUppercase = value => {
  return value === value.toUpperCase() && value.length > 0
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
  let value = formData[id]

  if (value === '') {
    errorMessage = `${id} field is required.`
  } else {
    switch (id) {
      case 'name':
      case 'surname':
        if (isUppercase(value)) {
          errorMessage = `${id} must be in uppercase.`
        }
    }
  }
  return errorMessage
}
