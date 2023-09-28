import React from 'react'

const Button = ({ buttonName, onClick, isDisabled = false }) => {
  return (
    <button
      onClick={onClick}
      type='button'
      disabled={isDisabled}
      data-testid={buttonName.toLowerCase()}
    >
      {buttonName}
    </button>
  )
}

export default Button
