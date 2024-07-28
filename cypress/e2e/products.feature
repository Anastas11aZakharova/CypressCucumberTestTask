Feature: products
Background: User logged in
    Given I logged in with valid credentials 
Scenario: logout
    When I click on burger button
    And I click on logout link
    Then I should see a 'Swag labs' header
Scenario: footer links
    Then I should see footer links
 Scenario: saving the cart after logout 
    When I add a backpack in the cart
    And I should see item in the cart
    And I click on burger button
    And I click on logout link
    And I logged in with valid credentials 
    Then I should see item in the cart
    And I remove a backpack from the cart
Scenario: valid checkout
    When I add a backpack in the cart
    And I should see item in the cart
    And I click on cart button
    And I should see cart page
    And I should see "Sauce Labs Backpack" in the cart 
    And I click on checkout button
    And I should see checkout page
    And I enter random valid information
    And I click on continue button
    And I should see overview page
    And I should see "Sauce Labs Backpack" in the overview page
    And I click on finish button
    Then I should see "Thank you for your order!" message
Scenario: remove product from cart
    When I add a backpack in the cart
    And I should see item in the cart
    And I click on cart button
    And I should see cart page
    And I should see "Sauce Labs Backpack" in the cart 
    And I click on remove button
    Then I should see cart page
    But I shouldn't see anything in the cart 
Scenario: missing first name on checkout
    When I click on cart button
    And I should see cart page
    And I click on checkout button
    And I should see checkout page
    And I click on continue button
    Then I should see "Error: First Name is required" error message 
Scenario: missing last name on checkout
    When I click on cart button
    And I should see cart page
    And I click on checkout button
    And I should see checkout page
    And I enter random first name
    And I click on continue button
    Then I should see "Error: Last Name is required" error message 
Scenario: missing postal code on checkout
    When I click on cart button
    And I should see cart page
    And I click on checkout button
    And I should see checkout page
     And I enter random first name
    And I enter random last name
    And I click on continue button
    Then I should see "Error: Postal Code is required" error message 




   


