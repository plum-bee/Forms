import React from 'react'

function SubmittedForm ({ formData }) {
  return (
    <div>
      <h1>Your Submitted Data:</h1>
      {formData &&
        Object.keys(formData).map(key => (
          <div key={key}>
            <strong>{key}:</strong> {formData[key]}
          </div>
        ))}
    </div>
  )
}

export default SubmittedForm
