/// <reference types="Cypress" />

describe("login tests", () => {
   
    it("login blocked user", () => {
        const user = {
            name : "locked_out_user",
            password: "secret_sauce",
            error_message: "Epic sadface: Sorry, this user has been locked out."
        }
        cy.login(user)
        cy.xpath("//h3[contains(text(), '"+ user.error_message +"')]").should("exist")
    })

    it("login with wrong password", () => {
        const user = {
            name : "standard_user",
            password: "wrongpassord",
            error_message: "Epic sadface: Username and password do not match any user in this service"
        }
        cy.login(user)
        cy.xpath("//h3[contains(text(), '"+ user.error_message +"')]").should("exist")
    })

    it("successful login", () =>{
        const user = {
            name : "standard_user",
            password: "secret_sauce",
        }
        cy.login(user)
        cy.get("#react-burger-menu-btn").should("exist")
    })
})