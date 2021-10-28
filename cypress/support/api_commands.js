/// <reference types="Cypress" />

Cypress.Commands.add('post_usuario', (user) =>{
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body:{
            nome: user.nome,
            email: user.email,
            password: user.senha,
            administrador: user.ehAdministrador
        }
            
    })
    
})


Cypress.Commands.add('get_usuarios', () =>{
    cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios'
    })
})