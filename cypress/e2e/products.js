import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pageobjects/loginPage";
import productsPage from "../pageobjects/productsPage";
import helper from "../pageobjects/helper";
import cartPage from "../pageobjects/cartPage";
import checkoutPage from "../pageobjects/checkoutPage";
import overviewPage from "../pageobjects/overviewPage";
import checkoutCompletePage from "../pageobjects/checkoutCompletePage";

Given("I logged in with valid credentials", () => {
    cy.visit("/");
    loginPage.isLoginHeaderVisible();
    loginPage.enterUserName(helper.validUserName);
    loginPage.enterPassword(helper.validPassword);
    loginPage.clickOnLoginBtn();
    productsPage.isProductsHeaderVisible();
});

When("I click on burger button", () => {
    productsPage.clickOnBurgerBtn();
});

When("I click on logout link", () => {
    productsPage.clickOnLogoutLink();
});

Then("I should see footer links", () => {
    productsPage.areFooterLinksValid();
});

When("I add a backpack in the cart", () => {
    productsPage.clickOnAddBackpackToCartBtn();
});

Then("I should see item in the cart", () => {
    productsPage.checkNumberOfProductsInCart(1);
});

Then("I remove a backpack from the cart", () => {
    productsPage.clickOnRemoveBackpackFromCartBtn();
});

Then("I should see a 'Swag labs' header", () => {
    loginPage.isLoginHeaderVisible();
});

When("I click on cart button", () => {
    productsPage.clickOnCartBtn();
});

When("I should see cart page", () => {
    cartPage.isYourCartHeaderVisible();
});

When("I should see {string} in the cart", (name) => {
    cartPage.checkInventoryItemName(name);
});


When("I click on checkout button", () => {
    cartPage.clickOnCheckoutBtn();
});

When("I should see checkout page", () => {
    checkoutPage.isCheckoutHeaderVisible();
});

When("I enter random valid information", () => {
    checkoutPage.enterRandomValidInformation();
});

When("I click on continue button", () => {
    checkoutPage.clickOnContinueBtn();
});

When("I should see overview page", () => {
    overviewPage.isOverviewPageHeaderVisible();
});

When("I should see {string} in the overview page", (name) => {
    overviewPage.isInventoryItemVisible(name);
});

When("I click on finish button", () => {
    overviewPage.clickOnFinishtBtn();
});

Then("I should see {string} message", (text) => {
    checkoutCompletePage.isCheckoutMessageVisible(text);
});

When("I click on remove button", () => {
    cartPage.clickOnRemoveBtn();
});

Then("I shouldn't see anything in the cart", () => {
    cartPage.checkInventoryItemNameNotVisible();
});

Then("I should see {string} error message", (text) => {
    checkoutPage.isErrorMessageVisible(text);
});

When("I enter random first name", () => {
    checkoutPage.enterRandomFirstname();
});

When("I enter random last name", () => {
    checkoutPage.enterRandomLastName();
});








