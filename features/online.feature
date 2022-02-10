Feature: Login and add product in card

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the Home Page
    Given I am Login Page
    Then Add product in Cart
    Then verify cart price
    Then Send message from contact page
    Then Make Payment for cart added order
    Then Search T-Shirt in Serchbox
    Then Open order history detail
    Then Open My Credit Slips
    Then Open My Addresses
    Then Open My Personal Information
    Then Open My Wishlists
