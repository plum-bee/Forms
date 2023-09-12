import React from 'react'
import { render, screen } from '@testing-library/react'
import Form from '../../components/Form.jsx'
import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/react'

export const formSteps = ({
  given: Given,
  and: And,
  when: When,
  then: Then
}) => {
  Given(/^The user opens the form$/, () => {
    render(<Form />)
  })

  And(/^The user selects "(.*)" from the country dropdown$/, country => {
    const countryField = screen.getByTestId('country')
    fireEvent.change(countryField, {
      target: { value: country }
    })
  })

  When(/^The user enters (.*) in the ID field$/, dni => {
    const dniField = screen.getByTestId('dni')
    fireEvent.change(dniField, {
      target: { value: dni }
    })
  })

  When(/^The user enters "(.*)" as "(.*)"$/, (value, field) => {
    const nameField = screen.getByTestId(field)
    fireEvent.change(nameField, {
      target: { value }
    })
  })

  Then(/^The field "(.*)" should be marked as "(.*)"$/, (field, isValid) => {
    const nameField = screen.getByTestId(field)
    expect(nameField).toHaveClass(isValid)
  })

  Then(/^The user should see "([^"]*)"$/, value => {
    const formTitle = screen.getByTestId('formtitle')
    expect(formTitle).toHaveTextContent(value)
  })

  Then(/^The user should see the following fields:$/, dataTable => {
    const fields = dataTable.map(row => row.field)

    fields.forEach(field => {
      const formField = screen.getByTestId(field)
      expect(formField).toBeInTheDocument()
    })
  })
}

export default formSteps
