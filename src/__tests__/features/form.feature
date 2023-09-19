Feature: Form Submission


    Scenario: Verifying 'Minesweeper Form' Title on Page Load
        Given The user opens the form
        Then The user should see "Minesweeper Form"


    Scenario: Verifying Form Fields on Page Load
        Given The user opens the form
        Then The user should see the following fields:
            | field    |
            | name     |
            | surname  |
            | username |
            | country  |
            | dni      |

    Scenario: Validating the Name Field with upperCase letter (Valid)
        Given The user opens the form
        When The user enters "JOHN" as "name"
        Then The field "name" should be marked as "valid"

    # Scenario: Validating the Name Field with upperCase letter (Invalid)
    #     Given The user opens the form
    #     When The user enters "john" as "name"
    #     Then The field "name" should be marked as "invalid"

    Scenario: Validating the Surname Field with upperCase letter (Valid)
        Given The user opens the form
        When The user enters "DOE" as "surname"
        Then The field "surname" should be marked as "valid"

    Scenario: Validating the Username Field with upperCase letter (Valid)
        Given The user opens the form
        And The user enters "JOHN" as "name"
        When The user enters "MIDUDEV" as "username"
        Then The field "username" should be marked as "valid"

    Scenario: Checking Country Options in the Dropdown Menu
        Given The user opens the form
        When The user clicks the "country" dropdown
        Then The user should see the following country options:
            | country   |
            | Spain     |
            | Argentina |

    Scenario Outline: Validating Spanish ID Numbers
        Given The user opens the form
        And The user selects "Spain" from the country dropdown
        When The user enters "<id>" as "dni"
        Then The field "dni" should be marked as "valid"
        Examples:
            | id        |
            | 12345678Z |
            | 87654321X |
            | 12398764Q |

    Scenario Outline: Validating Argentina ID Numbers
        Given The user opens the form
        And The user selects "Argentina" from the country dropdown
        When The user enters "<id>" as "dni"
        Then The field "dni" should be marked as "valid"
        Examples:
            | id          |
            | 99999999999 |
            | 12345678901 |

    Scenario Outline: Invalid Spanish ID Numbers
        Given The user opens the form
        And The user selects "Spain" from the country dropdown
        When The user enters "<invalidId>" as "dni"
        Then The field "dni" should be marked as "invalid"
        Examples:
            | invalidId |
            | 12        |
            | XYZ1234   |

    Scenario Outline: Invalid Argentina ID Numbers
        Given The user opens the form
        And The user selects "Argentina" from the country dropdown
        When The user enters "<invalidId>" as "dni"
        Then The field "dni" should be marked as "invalid"
        Examples:
            | invalidId |
            | 1234      |
            | ABC123    |

    Scenario: Checking Text Fields' Placeholders on Form Load
        Given The user opens the form
        Then The user should see the following text fields placeholder:
            | field    | placeholder         |
            | name     | Enter your name     |
            | surname  | Enter your surname  |
            | username | Enter your username |
            | dni      | Enter your DNI      |

    Scenario: Checking Select Field's Placeholder on Form Load
        Given The user opens the form
        Then The user should see the following select fields placeholder:
            | field   | placeholder         |
            | country | Select your country |

    Scenario: Verifying the Initial State of the Submit Button (Disabled)
        Given The user opens the form
        Then The user should see the "submit" button disabled

    Scenario: Verifying the Initial State of the Clear Button (Enabled)
        Given The user opens the form
        Then The user should see the "clear" button enabled

    Scenario: Enabling the Submit Button After Valid Form Input
        Given The user opens the form
        When The user enters "JOHN" as "name"
        And The user enters "DOE" as "surname"
        And The user enters "MIDUDEV" as "username"
        And The user selects "Spain" from the country dropdown
        And The user enters "12345678Z" as "dni"
        Then The user should see the "submit" button enabled

    Scenario:  Clearing Form Fields with the 'Clear' Button
        Given The user opens the form
        When The user enters "JOHN" as "name"
        And The user enters "DOE" as "surname"
        And The user enters "MIDUDEV" as "username"
        And The user selects "Spain" from the country dropdown
        And The user enters "12345678Z" as "dni"
        And The user clicks the "clear" button
        Then The user should see the following text fields placeholder:
            | field    | placeholder         |
            | name     | Enter your name     |
            | surname  | Enter your surname  |
            | username | Enter your username |
            | dni      | Enter your DNI      |

    Scenario Outline: Validating Required Fields with Error Messages
        Given The user opens the form
        When The user enters "data" as "<field>"
        And The user erases the "<field>" value
        And The user clicks away from the "<field>" area
        Then The user should see the following "<error_message>"
        Examples:
            | field    | data      | error_message        |
            | name     | JOHN      | name is required     |
            | surname  | DOE       | surname is required  |
            | username | MIDUDEV   | username is required |
            | country  | Spain     | country is required  |
            | dni      | 12345678Z | dni is required      |

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

# Scenario: Submit button is disabled
#     Given The user opens the form
#     Then The user should see the submit button disabled


# Scenario: Form sumbited
#     Given The user opens the form
#     When The user enters "JOHN" as name
#     And The user enters "DOE" as surname
#     And The user enters "MIDUDEV" as username
#     And The user selects "Spain" from the country dropdown
#     And The user enters "12345678Z" in the ID field
#     And The user clicks the submit button
#     Then The user should see "Form submitted successfully!"