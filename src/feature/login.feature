@login
Feature: Verify login

    Scenario: verify user is able to login with valid credentials
        Given I go to "https://qaplayground.com/bank"
        And I enter username "admin"
        And I enter password "admin123"
        When I click on login button
        Then user should see homePage

        # Examples:
        #   | username | password | result  |
        #   | admin    | admin123 | success |


    Scenario: verify alert message is user provide wrong credential
        Given I go to "https://qaplayground.com/bank"
        And I enter username "admin1"
        And I enter password "admin321"
        When I click on login button
        Then user should see alert message for Invalid username or password    