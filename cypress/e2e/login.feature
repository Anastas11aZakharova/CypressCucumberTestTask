
Feature: login
  Scenario: visiting the frontpage
    Given I visit saucedemo.com
    Then I should see a 'Swag labs' header
  Scenario: valid login
    Given I visit saucedemo.com
    When I enter valid username
    And I enter valid password
    And I click on login button  
    Then I should see products page
  Scenario: invalid username
    Given I visit saucedemo.com
    When I enter invalid username
    And I enter valid password
    And I click on login button  
    Then I should see "Epic sadface: Username and password do not match any user in this service" error message
  Scenario: invalid password
    Given I visit saucedemo.com
    When I enter invalid password
    And I enter valid username
    And I click on login button  
    Then I should see "Epic sadface: Username and password do not match any user in this service" error message
  Scenario: locked out user
    Given I visit saucedemo.com
    When I enter locked out username
    And I enter valid password
    And I click on login button  
    Then I should see "Epic sadface: Sorry, this user has been locked out." error message
  Scenario: empty user name
    Given I visit saucedemo.com
    When I enter valid password
    And I click on login button  
    Then I should see "Epic sadface: Username is required" error message
  Scenario: empty password
    Given I visit saucedemo.com
    When I enter valid username
    And I click on login button  
    Then I should see "Epic sadface: Password is required" error message
  