/// <reference types="Cypress" />

describe('logout test', () =>{

    it('logout', () =>{
        cy.login("standard_user", "secret_sauce")
        cy.logout()
    })

})