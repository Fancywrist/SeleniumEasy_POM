#Created by Aboyeji Basirat on 03.09.2021
Feature: Input Form Test

    Testing THREE Form scenarios

    Background: 
     Given I am on the Test site

   Scenario: A user should be able to Fill Simple Form Demo successfully
     
     When I click on "Banner prompt" 
     And I navigate to Menu List
     And I click on "Input Form" 
     Then I should see a list of Demo
     When I click om "Simple From Demo" 
     And I enter "value" for A
     And I enter "value" for B
     And I click on "Get Total" button
     Then I should see a success message
