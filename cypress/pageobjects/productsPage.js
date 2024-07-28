const productsHeaderLocator = "span[data-test='title']"
const burgerBtnLocator = "button[id='react-burger-menu-btn']"
const logoutLinkLocator = "a[id='logout_sidebar_link']"
const twitterLinkLocator = "a[data-test='social-twitter']"
const facebookLinkLocator = "a[data-test='social-facebook']"
const linkenInLinkLocator = "a[data-test='social-linkedin']"
const addBackpackToCartLocator = "button[id='add-to-cart-sauce-labs-backpack']"
const cartBtnLocator = "a[data-test='shopping-cart-link']"
const cartBadgeLocator = "span[data-test='shopping-cart-badge']"
const removeBackpackFromCartLocator = "button[data-test='remove-sauce-labs-backpack']"



class productsPage {


    elements = {
        productsHeader: () => cy.get(productsHeaderLocator),
        burgerBtn: () => cy.get(burgerBtnLocator),
        logoutLink: () => cy.get(logoutLinkLocator),
        twitterLink: () => cy.get(twitterLinkLocator),
        facebookLink: () => cy.get(facebookLinkLocator),
        linkedinLink: () => cy.get(linkenInLinkLocator),
        addBackpackToCart: () => cy.get(addBackpackToCartLocator),
        cartBtn: () => cy.get(cartBtnLocator),
        cartBadge: () => cy.get(cartBadgeLocator),
        removeBackpackFromCart: () => cy.get(removeBackpackFromCartLocator),


    }




    isProductsHeaderVisible() {
        this.elements.productsHeader().should('be.visible');
        this.elements.productsHeader().should('have.text', 'Products');
    }

    clickOnBurgerBtn() {
        this.elements.burgerBtn().click();
    }

    clickOnLogoutLink() {
        this.elements.logoutLink().click();
    }

    areFooterLinksValid() {
        this.elements.twitterLink().should('be.visible');
        this.elements.facebookLink().should('be.visible');
        this.elements.linkedinLink().should('be.visible');
        this.elements.twitterLink().should('have.attr', 'href', 'https://twitter.com/saucelabs');
        this.elements.facebookLink().should('have.attr', 'href', 'https://www.facebook.com/saucelabs');
        this.elements.linkedinLink().should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/');
    }

    clickOnAddBackpackToCartBtn() {
        this.elements.addBackpackToCart().click();
    }

    checkNumberOfProductsInCart(count) {
        this.elements.cartBadge().should('have.text', count);
    }

    clickOnRemoveBackpackFromCartBtn() {
        this.elements.removeBackpackFromCart().click();
    }

    clickOnCartBtn() {
        this.elements.cartBtn().click();
    }
}


module.exports = new productsPage();