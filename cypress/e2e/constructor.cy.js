describe('Burger constructor behavior', () => {
  beforeEach(() => {
    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' });
    cy.intercept('POST', 'api/orders', { fixture: 'order.json' }).as('postOrder');

    cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients', { fixture: 'ingredients.json' });

    window.localStorage.setItem(
      'refreshToken',
      JSON.stringify('test-refreshToken')
    );
    cy.setCookie('accessToken', 'test-accessToken');
  });

  it('drag & drop ingredients', () => {
    cy.visit('/');

    cy.get('[data-target="60d3b41abdacab0026a733c6"]')
      .trigger('dragstart');

    cy.get('[data-drop="dropzone"]')
      .trigger("drop")

    cy.get('[data-send]').click();

    cy.wait('@postOrder');

    cy.get('[data-test-id="order-number"]').contains('38633').should('exist');
  })
});