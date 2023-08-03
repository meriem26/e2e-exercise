
Cypress.Commands.add('checkPageTitle', (address,title) => {
    cy.visit(address)
    cy.title().should('eq',title)
})