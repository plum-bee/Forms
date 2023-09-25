import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Form from '../../components/Form.jsx'

const formFields = ['name', 'surname', 'username', 'country', 'dni']

const updateFieldValue = (field, value) => {
  fireEvent.change(screen.getByTestId(field), {
    target: { value: value }
  })
}

export const formSteps = ({
  given: Given,
  and: And,
  when: When,
  then: Then
}) => {
  // Given steps
  Given(/^the user opens the form$/, () => {
    render(<Form />)
  })

  // When steps
  When(/^the user types "(.*)" into the "(.*)" field$/, updateFieldValue)
  When(/^the user focuses on the "(.*)" field$/, field => {
    fireEvent.focus(screen.getByTestId(field))
  })
  When(/^the user enters the following data$/, dataTable => {
    dataTable.forEach(row => {
      updateFieldValue(row.field, row.value)
    })
  })
  When(/^the user clicks the "(.*)" button$/, buttonName => {
    fireEvent.click(screen.getByTestId(buttonName))
  })
  When(/^the user selects "(.*)" from the "(.*)" dropdown$/, updateFieldValue)

  // And steps
  And(/^the user leaves the "(.*)" field empty$/, field => {
    updateFieldValue(field, '')
    fireEvent.blur(screen.getByTestId(field))
  })
  And(/^the user leaves the "(.*)" field$/, field => {
    fireEvent.blur(screen.getByTestId(field))
  })

  // Then steps
  Then(
    /^the "(.*)" field should show as "(.*)"$/,
    (field, validationResult) => {
      expect(screen.getByTestId(field)).toHaveClass(validationResult)
    }
  )
  Then(
    /^the user should see the following "(.*)" error message:"([^"]*)"$/,
    (field, errorMessage) => {
      expect(screen.getByTestId(`${field}-error`)).toHaveTextContent(
        errorMessage
      )
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
      expect(screen.getByTestId(field)).toHaveValue('')
    })
  })
  Then(/^the user should see a new window containing the form data$/, () => {
    const newWindow = screen.getByTestId('form-data')
    const formData = formFields.map(field => {
      return `${field}: ${screen.getByTestId(field).value}`
    })
    expect(newWindow).toHaveTextContent(formData.join('\n'))
  })
}

export default formSteps
