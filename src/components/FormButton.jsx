import React from 'react'

function FormButton ({ buttonName, onClick, testid, isDisabled }) {
  return (
    <button onClick={onClick} data-testid={testid} disabled={isDisabled}>
      {buttonName}
    </button>
  )
}

export default FormButton
