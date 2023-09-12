export const isUppercase = value => {
  return value === value.toUpperCase()
}

export const isValidUsername = (name, username) => {
  return !username.includes(name) && isUppercase(username)
}
