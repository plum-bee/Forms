import React from 'react'

function SubmittedForm ({ formData }) {
  return (
    <div className='submittedForm' data-testid='form-data'>
      <h1>Your Submitted Data:</h1>
      {formData &&
        Object.keys(formData).map(key => (
          <div key={key} className='dataRow' data-testid={key}>
            <strong className='dataKey'>{key}:</strong>{' '}
            <span className='dataValue'>{formData[key]}</span>
          </div>
        ))}
    </div>
  )
}

export default SubmittedForm
