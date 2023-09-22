import React from 'react'
import { render, screen } from '@testing-library/react'
import Form from '../../components/Form.jsx'
import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/react'

const formFields = ['name', 'surname', 'username', 'country', 'dni']

const updateFieldValue = (field, value) => {
  const fieldElement = screen.getByTestId(field)
  fireEvent.change(fieldElement, {
    target: { value: value }
  })
}

export const formSteps = ({
  given: Given,
  and: And,
  when: When,
  then: Then
}) => {
  Given(/^the user opens the form$/, () => {
    render(<Form />)
  })

  When(/^the user enters "(.*)" in the "(.*)" field$/, (value, field) => {
    updateFieldValue(field, value)
  })

  When(/^the user enters in the "(.*)" field$/, field => {
    const fieldElement = screen.getByTestId(field)
    fireEvent.focus(fieldElement)
  })

  When(
    /^the user selects "(.*)" from the "(.*)" dropdown$/,
    (field, option) => {
      updateFieldValue(field, option)
    }
  )

  When(/^the user enters the following data$/, dataTable => {
    dataTable.forEach(row => {
      updateFieldValue(row.field, row.value)
    })
  })

  And(/^the user leaves the "(.*)" field empty$/, field => {
    updateFieldValue(field, '')
    fireEvent.blur(screen.getByTestId(field))
  })

  And(/^the user leaves the "(.*)" field$/, field => {
    fireEvent.blur(screen.getByTestId(field))
  })

  And(/^the user clicks the "(.*)" button$/, buttonName => {
    fireEvent.click(screen.getByTestId(buttonName))
  })

  Then(/^the field "(.*)" should be "(.*)"$/, (field, isValid) => {
    const fieldElement = screen.getByTestId(field)
    expect(fieldElement).toHaveClass(isValid)
  })

  Then(
    /^the user should see the following input error message:"([^"]*)"$/,
    errorMessage => {
      const messageElement = screen.getByText(errorMessage)
      expect(messageElement).toBeInTheDocument()
    }
  )

  Then(/^the "(.*)" button should be "(.*)"$/, (buttonName, buttonState) => {
    const button = screen.getByTestId(buttonName)
    if (buttonState === 'enabled') {
      expect(button).toBeEnabled()
    } else if (buttonState === 'disabled') {
      expect(button).toBeDisabled()
    }
  })

  Then(/^the form data should be empty$/, () => {
    formFields.forEach(field => {
      const fieldElement = screen.getByTestId(field)
      expect(fieldElement).toHaveValue('')
    })
  })

  Then(/^the user should see a new window containing the form data$/, () => {
    const newWindow = screen.getByTestId('form-data')
    const formData = formFields.map(field => {
      const fieldElement = screen.getByTestId(field)
      return `${field}: ${fieldElement.value}`
    })
    expect(newWindow).toHaveTextContent(formData.join('\n'))
  })
}

export default formSteps
