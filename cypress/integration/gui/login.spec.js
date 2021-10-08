/// <reference types="Cypress" />

describe("login", () => {
    beforeEach(() => cy.visit("https://www.saucedemo.com/"))

    
    it("login blocked user", () => {
        cy.login("locked_out_user", "secret_sauce")
        const message = "Epic sadface: Sorry, this user has been locked out."
        cy.xpath("//h3[contains(text(), '"+ message +"')]").should("exist")
    })

    it("successful login", () =>{
        cy.login("standard_user", "secret_sauce")
        cy.get("#react-burger-menu-btn").should("exist")
    })
})