
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pageobjects/loginPage";
import productsPage from "../pageobjects/productsPage";
import helper from "../pageobjects/helper";

Given("I visit saucedemo.com", () => {
  cy.visit("/");
});

Then("I should see a 'Swag labs' header", () => {
  loginPage.isLoginHeaderVisible();
});


When("I enter valid username", () => {
  loginPage.enterUserName(helper.validUserName);
});

When("I enter valid password", () => {
  loginPage.enterPassword(helper.validPassword);
});

When("I click on login button", () => {
  loginPage.clickOnLoginBtn();
});

Then("I should see products page", () => {
  productsPage.isProductsHeaderVisible();
});

When("I enter invalid username", () => {
  loginPage.enterUserName(helper.createRandomString(10));
});

Then("I should see {string} error message", (errorMessage) => {
  loginPage.elements.errorMessage().should('have.text', errorMessage);
});

When("I enter invalid password", () => {
  loginPage.enterPassword(helper.createRandomString(10));
});

When("I enter locked out username", () => {
  loginPage.enterUserName(helper.lockedOutUsername);
});








