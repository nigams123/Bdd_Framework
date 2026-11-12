@addAccount
Feature: addAccounts

    Scenario: Add a new account and verify the account is created

        Given I go to "https://qaplayground.com/bank"
        And I enter username "admin"
        And I enter password "admin123"

        When I click on login button
        And I click on add account button

        And I enter accountName "Aditya Birla"
        And I click on accountType dropdown
        And I select saving dropdown
        And I enter initialBalance "15000"
        And I check status
        And I click on save button

        Then I should see account created successfully