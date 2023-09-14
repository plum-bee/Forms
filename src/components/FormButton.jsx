import React from 'react';

function FormButton({ buttonName, onClick, testid, isDisabled}) {
  return (
    <button onClick={onClick} data-testid={testid} disabled={isDisabled?true:false}>
      {buttonName}
      {/* {console.log(buttonName)}
      {console.log(isDisabled)} */}
    </button>
  );
}

export default FormButton;
