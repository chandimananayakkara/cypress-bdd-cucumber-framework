Feature: Login Functionality

    Scenario: Successful login with valid credentias
    Given I visit the Swag Labs login page
    When I enter username "standard_user" and password "secret_sauce" And I click the login button Then I should be redirected to the inventory page