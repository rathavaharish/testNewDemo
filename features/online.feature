Feature: Login and add product in card

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the Home Page
    Given I am Login Page
    Then Add product in Cart
    Then verify cart price
