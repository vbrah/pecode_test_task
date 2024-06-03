Feature: Login form tests

  Background:
    Given user on the login page


  Scenario: Verify login form is presented correctly
    Then logo, title, input fields and button are presented

  Scenario: Verify input fields are filled after user enters credentials
    When user enters "incorrect" username
    And user enters "incorrect" password
    Then username and password fields are filled

  Scenario Outline: Verify an error message on incorrect credentials from different sources (Optional)
    And user enters "<usernameType>" username
    And user enters "<passwordType>" password
    When user clicks on Login button
    Then "no account found" message is appeared
    Examples:
      | usernameType | passwordType |
      | incorrect    | incorrect    |
      | fake         | fake         |
      | fromApi      | fromApi      |

  Scenario: Verify that error message is appeared when user clicking on "Login" button with empty username field
    And user enters "incorrect" password
    When user clicks on Login button
    Then error message is displayed on username field

  Scenario: Verify displaying error message when user clicks "Login" button with empty credentials
    When user clicks on Login button
    Then error message is displayed on username field
    And error message is displayed on password field

  Scenario: Verify that error message is appeared when user clicking on "Login" button with empty password field
    And user enters "incorrect" username
    When user clicks on Login button
    Then error message is displayed on password field

  #Fail test
  Scenario: Verify failing test due to incorrect credentials
    And user enters "incorrect" username
    And user enters "incorrect" password
    When user clicks on Login button
    Then home page is opened
