Feature: Form Submission
    As a user:
    - I want to fill out the form with my personal data and submit it
    - I want to see a window displaying my submitted data after I submit the form

    Valid Field:
    - Border color turns green.

    Invalid Field:
    - Border color turns red.
    - An error message displays below the field describing the error.

    Focus on a field:
    - Refers to the action of clicking on a field or tabbing into it

    Leave a field:
    - Refers to clicking away from the field, clicking on another field or tabbing to another field.

    Field validation:
    - The validation process begins when the user leaves a field.


    Background:
        Given the user opens the form

    Scenario Outline: Validate that name field contains only uppercase letters
        When the user types "<name>" into the "name" field
        And the user leaves the "name" field
        Then the "name" field should show as "<validation_result>"
        Examples:
            | name | validation_result |
            | JOHN | valid             |
            | john | invalid           |
            | John | invalid           |

    Scenario Outline: Validate that surname field contains only uppercase letters
        When the user types "<surname>" into the "surname" field
        And the user leaves the "surname" field
        Then the "surname" field should show as "<validation_result>"
        Examples:
            | surname | validation_result |
            | DOE     | valid             |
            | doe     | invalid           |
            | Doe     | invalid           |

    Scenario Outline: Validate username field contains only uppercase letters
        When the user types "<username>" into the "username" field
        And the user leaves the "username" field
        Then the "username" field should show as "<validation_result>"
        Examples:
            | username | validation_result |
            | MIDUDEV  | valid             |
            | midudev  | invalid           |
            | Midudev  | invalid           |

    Scenario Outline: Validate that username field does not contain user's name
        When the user types "<name>" into the "name" field
        And the user types "<username>" into the "username" field
        And the user leaves the "username" field
        Then the "username" field should show as "<validation_result>"
        Examples:
            | name | username | validation_result |
            | JOHN | MIDUDEV  | valid             |
            | JOHN | JOHN     | invalid           |
            | JOHN | MIDUJOHN | invalid           |
            | JOHN | JOHN123  | invalid           |
    # | JULIO JOSE | JULIO    | invalid           |
    # | JULIO JOSE | JOSE     | invalid           |

    Scenario Outline: Validate that username field does not contain more than 10 characters
        When the user types "<username>" into the "username" field
        And the user leaves the "username" field
        Then the "username" field should show as "<validation_result>"
        Examples:
            | username    | validation_result |
            | MIDUDEV     | valid             |
            | MIDUDEV123  | valid             |
            | MIDUDEV1234 | invalid           |

    Scenario Outline: Validate that the selected country is not the default option
        When the user selects "<country>" from the "country" dropdown
        And the user leaves the "country" field
        Then the "country" field should show as "<validation_result>"
        Examples:
            | country             | validation_result |
            | SPAIN               | valid             |
            | ARGENTINA           | valid             |
            | Select your country | invalid           |

    Scenario Outline: Display an error message when a field is left empty
        When the user focuses on the "<field>" field
        And the user leaves the "<field>" field empty
        Then the user should see the following "<field>" error message: "<error_message>"
        Examples:
            | field    | error_message              |
            | name     | name field is required     |
            | surname  | surname field is required  |
            | username | username field is required |
            | country  | country field is required  |
            | dni      | dni field is required      |

    Scenario Outline: Display error message when the user leaves a field in lowercase
        When the user types "<value>" into the "<field>" field
        And the user leaves the "<field>" field
        Then the user should see the following "<field>" error message: "<error_message>"
        Examples:
            | field    | value     | error_message                 |
            | name     | john      | name must be in uppercase     |
            | surname  | doe       | surname must be in uppercase  |
            | username | midudev   | username must be in uppercase |
            | dni      | 12345678z | dni must be in uppercase      |

    Scenario Outline: Display error message when the username contains the user's name
        When the user types "<name>" into the "name" field
        And the user types "<username>" into the "username" field
        And the user leaves the "username" field
        Then the user should see the following "username" error message: "<error_message>"
        Examples:
            | name | username | error_message                |
            | JOHN | JOHN     | username cannot contain name |
            | JOHN | MIDUJOHN | username cannot contain name |
            | JOHN | JOHN123  | username cannot contain name |

    Scenario Outline: Display error message when the user types a username with more than 10 characters
        When the user types "<username>" into the "username" field
        And the user leaves the "username" field
        Then the user should see the following "username" error message: "<error_message>"
        Examples:
            | username    | error_message                           |
            | MIDUDEV1234 | username cannot have more than 10 chars |

    Scenario Outline: Display error message when the user types an invalid DNI
        When the user selects "<country>" from the "country" dropdown
        And the user leaves the "country" field
        And the user types "<dni>" into the "dni" field
        And the user leaves the "dni" field
        Then the user should see the following "dni" error message: "<error_message>"
        Examples:
            | country   | dni        | error_message           |
            | SPAIN     | 12345687Z  | Invalid Spanish DNI     |
            | SPAIN     | 87354321X  | Invalid Spanish DNI     |
            | ARGENTINA | 9999999999 | Invalid Argentinian DNI |
            | ARGENTINA | 1234567890 | Invalid Argentinian DNI |

    Scenario Outline: Display error message when the user types DNI without country selected
        When the user types "<dni>" into the "dni" field
        And the user leaves the "dni" field
        Then the user should see the following "dni" error message: "<error_message>"
        Examples:
            | dni        | error_message                 |
            | 12345687Z  | Country selection is required |
            | 87354321X  | Country selection is required |
            | 9999999999 | Country selection is required |
            | 1234567890 | Country selection is required |

    Scenario: Submit button is disabled by default
        Then the "submit" button should be "disabled"

    Scenario: Submit button is enabled when the all form fields are valid
        When the user enters the following data
            | field    | value     |
            | name     | JOHN      |
            | surname  | DOE       |
            | country  | SPAIN     |
            | username | MIDUDEV   |
            | dni      | 12345678Z |
        Then the "submit" button should be "enabled"

    Scenario: Clear button is always enabled
        Then the "clear" button should be "enabled"

    Scenario: Clear button clears all the form data
        And the user types the following data
            | field    | value     |
            | name     | JOHN      |
            | surname  | DOE       |
            | country  | SPAIN     |
            | username | MIDUDEV   |
            | dni      | 12345678Z |
        When the user clicks the "clear" button
        Then the form data should show as empty

    @single
    Scenario: Submit button opens a new window containing all the data submited
        And the user types the following data
            | field    | value     |
            | name     | JOHN      |
            | surname  | DOE       |
            | country  | SPAIN     |
            | username | MIDUDEV   |
            | dni      | 12345678Z |
        When the user clicks the "submit" button
        Then the user should see a new window containing the form data