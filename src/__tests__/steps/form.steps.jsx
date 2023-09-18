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

  And(/^The user erases the "(.*)" value$/, field => {
    const nameField = screen.getByTestId(field)
    fireEvent.change(nameField, {
      target: { value: '' }
    })
  })

  And(/^The user clicks away from the "(.*)" area$/, field => {
    const nameField = screen.getByTestId(field)
    fireEvent.blur(nameField)
  })

  When(/^The user clicks the "(.*)" dropdown$/, field => {
    const nameField = screen.getByTestId(field)
    fireEvent.click(nameField)
  })

  When(/^The user clicks the "(.*)" button$/, buttonName => {
    const button = screen.getByTestId(buttonName)
    fireEvent.click(button)
  })

  When(/^The user enters "(.*)" as "(.*)"$/, (value, field) => {
    const nameField = screen.getByTestId(field)
    fireEvent.change(nameField, {
      target: { value: value }
    })
  })

  Then(/^The user should see the following country options:$/, dataTable => {
    const fields = dataTable.map(row => row.country)
    fields.forEach(field => {
      const formField = screen.getByTestId('country')
      expect(formField).toHaveTextContent(field)
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

  Then(/^The user should see the following "([^"]*)"$/, errorMessage => {
    const error = screen.getByText(errorMessage)
    expect(error).toBeInTheDocument()
  })

  Then(/^The user should see the following fields:$/, dataTable => {
    const fields = dataTable.map(row => row.field)

    fields.forEach(field => {
      const formField = screen.getByTestId(field)
      expect(formField).toBeInTheDocument()
    })
  })

  Then(
    /^The user should see the following text fields placeholder:$/,
    dataTable => {
      const fields = dataTable.map(row => row.field)
      const placeholders = dataTable.map(row => row.placeholder)

      fields.forEach((field, index) => {
        const formField = screen.getByTestId(field)
        expect(formField).toHaveAttribute('placeholder', placeholders[index])
      })
    }
  )

  Then(
    /^The user should see the following select fields placeholder:$/,
    dataTable => {
      const fields = dataTable.map(row => row.field)
      const placeholders = dataTable.map(row => row.placeholder)

      fields.forEach((field, index) => {
        const formField = screen.getByTestId(field)
        const formPlaceholder = formField.querySelectorAll('option')[0]
        expect(formPlaceholder).toHaveTextContent(placeholders[index])
      })
    }
  )

  Then(/^The user should see the "(.*)" button disabled$/, buttonName => {
    const button = screen.getByTestId(buttonName)
    expect(button).toBeDisabled()
  })

  Then(/^The user should see the "(.*)" button enabled$/, buttonName => {
    const button = screen.getByTestId(buttonName)
    expect(button).toBeEnabled()
  })
}

export default formSteps
