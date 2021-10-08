/// <reference types="Cypress" />


Cypress.Commands.add('login', (username, password) =>{
    cy.visit("https://www.saucedemo.com/")
    cy.get("#user-name").type(username)
    cy.get("#password").type(password)
    cy.xpath("//input[@type='submit']").click()
})

Cypress.Commands.add('logout', () =>{
    cy.get("#react-burger-menu-btn").click()
    cy.get('#logout_sidebar_link').click()
    cy.get("#user-name").should("exist")
})