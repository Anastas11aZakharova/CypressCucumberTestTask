import helper from "./helper"

const checkoutHeaderLocator = "div[class='header_secondary_container']"
const continueBtnLocator = "input[id='continue']"
const firstNameFieldLocator = "input[id='first-name']"
const lastNameFieldLocator = "input[id='last-name']"
const zipCodeFieldLocator = "input[id='postal-code']"
const errorMessageLocator = "div[class='error-message-container error']"

class checkoutPage {

    elements = {
        checkoutHeader: () => cy.get(checkoutHeaderLocator),
        continueBtn: () => cy.get(continueBtnLocator),
        firstNameField: () => cy.get(firstNameFieldLocator),
        lastNameField: () => cy.get(lastNameFieldLocator),
        zipCodeField: () => cy.get(zipCodeFieldLocator),
        errorMessage: () => cy.get(errorMessageLocator),
    }

    isCheckoutHeaderVisible() {
        this.elements.checkoutHeader().should('be.visible');
        this.elements.checkoutHeader().should('have.text', 'Checkout: Your Information');
    }

    enterRandomValidInformation() {
        this.enterRandomFirstname();
        this.enterRandomLastName();
        this.enterRandomZipCode();

    }
    enterRandomFirstname() {
        this.elements.firstNameField().type(helper.createRandomString(10));;
    }

    enterRandomLastName() {
        this.elements.lastNameField().type(helper.createRandomString(10));;
    }

    enterRandomZipCode() {
        this.elements.zipCodeField().type(helper.createRandomString(10));;
    }

    clickOnContinueBtn() {
        this.elements.continueBtn().click();
    }

    isErrorMessageVisible(text) {
        this.elements.errorMessage().should('be.visible');
        this.elements.errorMessage().should('have.text', text);
    }

}

export default new checkoutPage();