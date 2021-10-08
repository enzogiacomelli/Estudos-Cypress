/// <reference types="Cypress" />

describe("login", () => {
    beforeEach(() => cy.visit("https://www.saucedemo.com/"));

    
    it("login blocked user", () => {
        cy.login("locked_out_user", "secret_sauce")

        cy.xpath("h3[contains(text(), " + "Epic sadface: Sorry, this user has been locked out." + ")]").should("exist")

    })
})