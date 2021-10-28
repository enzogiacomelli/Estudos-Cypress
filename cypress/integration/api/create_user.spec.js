/// <reference types="Cypress" />

const faker = require('faker')

describe('user tests', () =>{

    it('create user successfully', () => {
        var normal_user = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            senha: faker.internet.password(),
            ehAdministrador: 'true'
        }
        cy.post_usuario(normal_user).then((response) => {
            expect(response.status).to.eq(201)
        })
    })

})