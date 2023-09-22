import React from 'react'
import { render, screen } from '@testing-library/react'
import Form from '../../components/Form.jsx'
import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/react'

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
  //old

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

  Then(/^The user should see the following country options:$/, dataTable => {
    const fields = dataTable.map(row => row.country)
    fields.forEach(field => {
      const formField = screen.getByTestId('country')
      expect(formField).toHaveTextContent(field)
    })
  })

  Then(/^The user should see "([^"]*)"$/, value => {
    const formTitle = screen.getByTestId('formtitle')
    expect(formTitle).toHaveTextContent(value)
  })

  Then(
    /^The user should see the following message "([^"]*)"$/,
    errorMessage => {
      const error = screen.getByText(errorMessage)
      expect(error).toBeInTheDocument()
    }
  )

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

  Then(/^The user should see the "(.*)" button enabled$/, buttonName => {
    const button = screen.getByTestId(buttonName)
    expect(button).toBeEnabled()
  })
}

export default formSteps
