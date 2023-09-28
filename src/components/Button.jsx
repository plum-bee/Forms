import React from 'react'

const Button = ({ buttonName, onClick, isDisabled = false, className }) => {
  const getClassName = isDisabled ? 'disabled-button' : className
  return (
    <button
      onClick={onClick}
      type='button'
      disabled={isDisabled}
      data-testid={buttonName.toLowerCase()}
      className={getClassName}
    >
      {buttonName}
    </button>
  )
}

export default Button
