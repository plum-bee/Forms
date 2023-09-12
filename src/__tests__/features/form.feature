Feature: Form Submission

    Scenario: Form title
        Given The user opens the form
        Then The user should see "Minesweeper Form"

    Scenario: Form fields
        Given The user opens the form
        Then The user should see the following fields:
            | field    |
            | name     |
            | surname  |
            | username |
            | country  |
            | dni      |

    Scenario: Name field valid
        Given The user opens the form
        When The user enters "JOHN" as "name"
        Then The field "name" should be marked as "valid"

    # Scenario: Name field invalid
    #     Given The user opens the form
    #     When The user enters "john" as "name"
    #     Then The field "name" should be marked as "invalid"

    Scenario: Surname field valid
        Given The user opens the form
        When The user enters "DOE" as "surname"
        Then The field "surname" should be marked as "valid"

    Scenario: Username field valid
        Given The user opens the form
        And The user enters "JOHN" as "name"
        When The user enters "MIDUDEV" as "username"
        Then The field "username" should be marked as "valid"

    Scenario Outline: Valid Spain ID
        Given The user opens the form
        And The user selects "Spain" from the country dropdown
        When The user enters "<id>" as "dni"
        Then The field "dni" should be marked as "valid"
        Examples:
            | id        |
            | 12345678Z |
            | 87654321X |
            | 12398764Q |

    Scenario Outline: Valid Argentina ID
        Given The user opens the form
        And The user selects "Argentina" from the country dropdown
        When The user enters "<id>" as "dni"
        Then The field "dni" should be marked as "valid"
        Examples:
            | id          |
            | 99999999999 |
            | 12345678901 |

    Scenario Outline: Invalid Spain ID
        Given The user opens the form
        And The user selects "Spain" from the country dropdown
        When The user enters "<invalidId>" as "dni"
        Then The field "dni" should be marked as "invalid"
        Examples:
            | invalidId |
            | 12        |
            | XYZ1234   |

    Scenario Outline: Invalid Argentina ID
        Given The user opens the form
        And The user selects "Argentina" from the country dropdown
        When The user enters "<invalidId>" as "dni"
        Then The field "dni" should be marked as "invalid"
        Examples:
            | invalidId |
            | 1234      |
            | ABC123    |


# Scenario Outline: Name field invalid message
#     Given The user opens the form
#     When The users enters "<name>" as name
#     Then The user should see the following "<error_message>"
#     Examples:
#         | name | error_message                            |
#         | john | Name must contain only uppercase letters |
#         | JoHn | Name must contain only uppercase letters |


# Scenario Outline: Surname field invalid message
#     Given The user opens the form
#     When The users enters "<surname>" as surname
#     Then The user should see the following "<error_message>"
#     Examples:
#         | surname | error_message                               |
#         | doe     | Surname must contain only uppercase letters |
#         | DoE     | Surname must contain only uppercase letters |


# Scenario Outline: Username field invalid message
#     Given The user opens the form
#     And The user enters "JOHN" as name
#     When The users enters "<username>" as username
#     Then The user should see the following "<error_message>"
#     Examples:
#         | username    | error_message                                |
#         | john        | Username must contain only uppercase         |
#         | JOHN        | Username cannot contain name                 |
#         | MIDUDEV1234 | Username cannot have more than 10 characters |

# Scenario: Country options
#     Given The user opens the form
#     When The user clicks the country dropdown
#     Then The user should see the following country options:
#         | country   |
#         | Spain     |
#         | Argentina |





# Scenario Outline: Invalid Argentina ID message
#     Given The user opens the form
#     And The user selects "Argentina" from the country dropdown
#     When The user enters "<invalidId>" in the ID field
#     Then The user should see the following "<error_message>"
#     Examples:
#         | invalidId | error_message |
#         | 1234      | Invalid ID    |
#         | ABC123    | Invalid ID    |

# Scenario Outline: Invalid Spain ID message
#     Given The user opens the form
#     And The user selects "Spain" from the country dropdown
#     When The user enters "<invalidId>" in the ID field
#     Then The user should see the following "<error_message>"
#     Examples:
#         | invalidId | error_message |
#         | 12        | Invalid ID    |
#         | XYZ1234   | Invalid ID    |

# Scenario: Default field content
#     Given The user opens the form
#     Then The user should see the following default content:
#         | field    | content               |
#         | name     | Enter your name       |
#         | surname  | Enter your nurname    |
#         | username | Enter your username   |
#         | country  | Select a country      |
#         | id       | Enter your country ID |

# Scenario: Submit button is disabled
#     Given The user opens the form
#     Then The user should see the submit button disabled

# Scenario: Submit button is enabled
#     Given The user opens the form
#     When The user enters "JOHN" as name
#     And The user enters "DOE" as surname
#     And The user enters "MIDUDEV" as username
#     And The user selects "Spain" from the country dropdown
#     And The user enters "12345678Z" in the ID field
#     Then The submit button should be enabled

# Scenario: Form sumbited
#     Given The user opens the form
#     When The user enters "JOHN" as name
#     And The user enters "DOE" as surname
#     And The user enters "MIDUDEV" as username
#     And The user selects "Spain" from the country dropdown
#     And The user enters "12345678Z" in the ID field
#     And The user clicks the submit button
#     Then The user should see "Form submitted successfully!"

# Scenario: Clear button
#     Given The user opens the form
#     When The user enters "JOHN" as name
#     And The user enters "DOE" as surname
#     And The user enters "MIDUDEV" as username
#     And The user selects "Spain" from the country dropdown
#     And The user enters "12345678Z" in the ID field
#     And The user clicks the clear button
#     Then The user should see the following default content:
#         | field    | content               |
#         | name     | Enter your name       |
#         | surname  | Enter your nurname    |
#         | username | Enter your username   |
#         | country  | Select a country      |
#         | id       | Enter your country ID |

# Scenario Outline: Required field validation
#     When The user types "<fieldData>" in the "<fieldName>" field
#     And The user clears the "<fieldName>" field
#     Then The user should see the following "<error_message>"
#     Examples:
#         | fieldName | validData | error_message          |
#         | name      | John      | This field is required |
#         | surname   | Doe       | This field is required |
#         | username  | jdoe123   | This field is required |
#         | id        | 12345678Z | This field is required |