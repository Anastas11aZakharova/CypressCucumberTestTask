const yourCartHeaderLocator = "div[class='header_secondary_container']"
const inventoryItemLocator = "div[class='inventory_item_name']"
const checkoutBtnLocator = "button[id='checkout']"
const removeBtnLocator = "button[id='remove-sauce-labs-backpack']"



class cartPage {


    elements = {
        yourCartHeader: () => cy.get(yourCartHeaderLocator),
        inventoryItem: () => cy.get(inventoryItemLocator),
        checkoutBtn: () => cy.get(checkoutBtnLocator),
        removeBtn: () => cy.get(removeBtnLocator),





    }


    isYourCartHeaderVisible() {
        this.elements.yourCartHeader().should('be.visible');
        this.elements.yourCartHeader().should('have.text', 'Your Cart');
    }

    checkInventoryItemName(name) {
        this.elements.inventoryItem().should('have.text', name);
    }


    clickOnCheckoutBtn() {
        this.elements.checkoutBtn().click();

    }

    clickOnRemoveBtn() {
        this.elements.removeBtn().click();

    }

    checkInventoryItemNameNotVisible() {
        this.elements.inventoryItem().should('not.exist')

    }


}

module.exports = new cartPage();