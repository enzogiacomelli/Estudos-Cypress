describe("Teste01", () => {
    beforeEach(() => cy.visit("https://www.saucedemo.com/"));

    
    it("login blocked user", () => {
        cy.get("#user-name").type("locked_out_user");
        cy.get("#password").type("secret_sauce");
        cy.xpath("//input[@type='submit']").click();
        cy.xpath("//h3[contains(text, Epic)]").should("exist");

    });
});