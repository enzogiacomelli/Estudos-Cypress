/// <reference types="Cypress" />

describe('user tests', () =>{

    it('get users', () => {
        cy.get_usuarios().then((response) => {
            expect(response.status).to.eq(200)
        }) 
    })



})