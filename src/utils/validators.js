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

export const isCheckError = (fieldId, fieldValue) => {
  let error = null;

  switch (fieldId) {
    case 'username':
      if (fieldValue.length > 10) {
        error = `${fieldId} cannot exceed 10 characters`
      } else if (fieldValue.length === 11) {
        error = `${fieldId} cannot have 11 characters`
      } else if (!isUppercase(fieldValue)) { 
        error = `${fieldId} must be in uppercase`
      }
      break;
    case 'name':
    case 'surname':
      if (!isUppercase(fieldValue)) {
        error = `${fieldId} must be in uppercase`
      }
      break
    default:
      break
  }

  return error
};
