import './App.css'
import { useState } from 'react'
import Form from './components/Form.jsx'
import SubmittedForm from './components/SubmittedForm'

function App () {
  const [submittedData, setSubmittedData] = useState(null)
  const handleSubmit = formData => {
    setSubmittedData(formData)
  }
  return (
    <div>
      {submittedData ? (
        <SubmittedForm formData={submittedData} />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
    </div>
  )
}

export default App
