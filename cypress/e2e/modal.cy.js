describe('modal behavior', () => {
  it("open & close modal ingredient", () => {
    cy.visit('/');
    cy.get('[data-modal="60d3b41abdacab0026a733c7"]').click();
    cy.get('[data-modal="popup"]').should('exist');

    cy.wait(800);

    cy.get('[data-modal="popup"]').find('button').click();
    cy.get('[data-modal="popup"]').should('not.exist');
  });
})