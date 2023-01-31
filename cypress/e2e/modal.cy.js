describe('modal behavior', () => {
  it("open & close modal ingredient", () => {
    cy.visit('/');
    cy.get('[data-modal="60d3b41abdacab0026a733c7"]').click();
    cy.get('[data-modal="popup"]').as('popup').should('exist');

    cy.wait(800);

    cy.get('@popup').find('button').click();
    cy.get('@popup').should('not.exist');
  });
})