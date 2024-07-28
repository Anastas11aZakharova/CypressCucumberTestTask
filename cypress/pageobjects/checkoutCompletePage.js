const checkoutMessageLocator = "h2[data-test='complete-header']"



class checkoutCompletePage {


    elements = {
        checkoutMessage: () => cy.get(checkoutMessageLocator),






    }


    isCheckoutMessageVisible() {
        this.elements.checkoutMessage().should('be.visible');
        this.elements.checkoutMessage().should('have.text', 'Thank you for your order!');
    }




}

module.exports = new checkoutCompletePage();