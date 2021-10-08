// ***********************************************
/// <reference types="Cypress" />


Cypress.Commands.add('login', (username, password) =>{
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
    cy.xpath("//input[@type='submit']").click();
});