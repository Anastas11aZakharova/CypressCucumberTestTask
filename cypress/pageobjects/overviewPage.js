const overviewPageHeaderLocator = "div[class='header_secondary_container']"
const inventoryItemLocator = "div[class='inventory_item_name']"
const finishBtnLocator = "button[id='finish']"



class overviewPage {


    elements = {
        overviewPageHeader: () => cy.get(overviewPageHeaderLocator),
        inventoryItem: () => cy.get(inventoryItemLocator),
        finishBtn: () => cy.get(finishBtnLocator),





    }


    isOverviewPageHeaderVisible() {
        this.elements.overviewPageHeader().should('be.visible');
        this.elements.overviewPageHeader().should('have.text', 'Checkout: Overview');
    }

    isInventoryItemVisible(text) {
        this.elements.inventoryItem().should('be.visible');
        this.elements.inventoryItem().should('have.text', text);
    }

    clickOnFinishtBtn() {
        this.elements.finishBtn().click();

    }



}

module.exports = new overviewPage();