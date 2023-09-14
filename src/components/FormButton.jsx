import React from 'react';

function FormButton(buttonName, onClick, testid ) {
  return (
    <button onClick={onClick} data-testid={testid}>
    

    </button>
  )
}

export default FormButton;