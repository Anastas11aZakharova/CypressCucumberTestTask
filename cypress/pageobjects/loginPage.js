const loginHeaderLocator = "div[class='login_logo']"
const userNameLocator = "input[id='user-name']"
const passwordLocator = "input[id='password']"
const loginBtnLocator = "input[id='login-button']"
const errorMessageLocator = "h3[data-test='error']"



class loginPage {


    elements = {
        loginHeader: () => cy.get(loginHeaderLocator),
        userNameField: () => cy.get(userNameLocator),
        passwordField: () => cy.get(passwordLocator),
        loginButton: () => cy.get(loginBtnLocator),
        errorMessage: () => cy.get(errorMessageLocator),


    }





    isLoginHeaderVisible() {
        this.elements.loginHeader().should('be.visible');
        this.elements.loginHeader().should('have.text', 'Swag Labs');
    }

    enterUserName(username) {
        this.elements.userNameField().type(username);
    }

    enterPassword(password) {
        this.elements.passwordField().type(password);
    }

    clickOnLoginBtn() {
        this.elements.loginButton().click();
    }



}


module.exports = new loginPage();