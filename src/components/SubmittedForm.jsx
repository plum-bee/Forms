import React from 'react'

function SubmittedForm ({ formData }) {
  return (
    <div data-testid='form-data'>
      <h1>Your Submitted Data:</h1>
      {formData &&
        Object.keys(formData).map(key => (
          <div key={key} data-testid={key}>
            <strong>{key}:</strong> {formData[key]}
          </div>
        ))}
    </div>
  )
}

export default SubmittedForm
