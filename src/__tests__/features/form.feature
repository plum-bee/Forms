Feature: Form Submission
    As a user:
    - I want to fill the form with my personal data and submit it
    - I want to see a window with my submitted data after submitting the form

    How to identify a valid field:
    - Field border color is color green

    How to identify an invalid field:
    - Field border color is color red
    - An error message is displayed below the field containing the error description

    How to leave a field:
    - Click away from the field
    - Click on another field
    - Tabbing to another field

    Background:
        Given the user opens the form

    Scenario Outline: Validate name field contains only uppercase letters
        When the user enters "<name>" into the "name" field
        Then the field "name" should be "<validation_result>"
        Examples:
            | name | validation_result |
            | JOHN | valid             |
            | john | invalid           |
            | John | invalid           |

    Scenario Outline: Validate surname field contains only uppercase letters
        When the user enters "<surname>" into the "surname" field
        Then the field "surname" should be "<validation_result>"
        Examples:
            | surname | validation_result |
            | DOE     | valid             |
            | doe     | invalid           |
            | Doe     | invalid           |

    Scenario Outline: Validate username field contains only uppercase letters
        When the user enters "<username>" into the "username" field
        Then the field "username" should be "<validation_result>"
        Examples:
            | username | validation_result |
            | MIDUDEV  | valid             |
            | midudev  | invalid           |
            | Midudev  | invalid           |

    Scenario Outline: Validate username field does not contain user's name
        When the users enters "<name>" as "name"
        And the user enters "<username>" into the "username" field
        Then the field "username" should be "<validation_result>"
        Examples:
            | name       | username | validation_result |
            | JOHN       | JOHN     | invalid           |
            | JOHN       | MIDUJOHN | invalid           |
            | JOHN       | JOHN123  | invalid           |
            | JULIO JOSE | JULIO    | invalid           |
            | JULIO JOSE | JOSE     | invalid           |

    Scenario Outline: Validate username field does not contain more than 10 characters
        When the user enters "<username>" into the "username" field
        Then the field "username" should be "<validation_result>"
        Examples:
            | username    | validation_result |
            | MIDUDEV     | valid             |
            | MIDUDEV123  | valid             |
            | MIDUDEV1234 | invalid           |

    Scenario Outline: Validate the selected country is not the default option
        When the user selects "<country>" from the country dropdown
        Then the field "country" should be "<validation_result>"
        Examples:
            | country   | validation_result |
            | Spain     | valid             |
            | Argentina | valid             |

    Scenario Outline: Display error message when the user leaves a field empty
        When the user is in the '<field>' field
        And the user leaves the field empty
        Then the user should see the following message "<error_message>"
        Examples:
            | field    | error_message              |
            | name     | name field is required     |
            | surname  | surname field is required  |
            | username | username field is required |
            | country  | country field is required  |
            | dni      | dni field is required      |

    Scenario Outline: Display error message when the user leaves a field in lowercase
        When the user enters "<value>" into the "<field>" field
        And the user leaves the field
        Then the user should see the following message "<error_message>"
        Examples:
            | field    | value    | error_message                   |
            | name     | john     | name must be in uppercase       |
            | surname  | doe      | surname must be in uppercase    |
            | username | midudev  | username must be in uppercase   |
            | dni      | 12345678 | dni letter must be in uppercase |

    Scenario Outline: Display error message when the username contains the user's name
        When the user enters "<name>" into the "name" field
        And the user enters "<username>" into the "username" field
        Then the user should see the following message "<error_message>"
        Examples:
            | name | username | error_message                |
            | JOHN | JOHN     | username cannot contain name |
            | JOHN | MIDUJOHN | username cannot contain name |
            | JOHN | JOHN123  | username cannot contain name |

    Scenario Outline: Display error message when the user enters a username with more than 10 characters
        When the user enters "<username>" into the "username" field
        Then the user should see the following message "<error_message>"
        Examples:
            | username    | error_message                           |
            | MIDUDEV1234 | username cannot have more than 10 chars |

    Scenario Outline: Display error message when the user enters an invalid DNI
        When the user selects "<country>" from the country dropdown
        And the user enters "<dni>" in the ID field
        Then the user should see the following message "<error_message>"
        Examples:
            | country   | dni        | error_message    |
            | Spain     | 12345687Z  | DNI is not valid |
            | Spain     | 87354321X  | DNI is not valid |
            | Argentina | 9999999999 | DNI is not valid |
            | Argentina | 1234567890 | DNI is not valid |

    Scenario: Submit button is disabled by default
        Then the user should see the "submit" button "disabled"

    Scenario: Submit button is enabled when all form fields are valid
        When the user enters the following valid data
            | field    | value     |
            | name     | JOHN      |
            | surname  | DOE       |
            | country  | SPAIN     |
            | username | MIDUDEV   |
            | dni      | 12345678Z |
        Then the user should see the "submit" button "enabled"

    Scenario: Clear button is always enabled
        Then The user should see the "clear" button "enabled"

    Scenario: Clear button clears all form fields
        When the user enters the following data
            | field    | value     |
            | name     | JOHN      |
            | surname  | DOE       |
            | country  | SPAIN     |
            | username | MIDUDEV   |
            | dni      | 12345678Z |
        And the user clicks the "clear" button
        Then the form data should be empty

    Scenario: Submit button opens a new window containing all the data submited
        When the user enters the following valid data
            | field    | value     |
            | name     | JOHN      |
            | surname  | DOE       |
            | country  | SPAIN     |
            | username | MIDUDEV   |
            | dni      | 12345678Z |
        And the user clicks the "submit" button
        Then the user should see a new window containing the form data