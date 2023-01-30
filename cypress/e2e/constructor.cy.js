describe('Burger constructor behavior', () => {
  beforeEach(() => {
    cy.intercept("GET", "api/auth/user", { fixture: "user.json" });
    cy.intercept("POST", "api/orders", { fixture: "order.json" }).as("postOrder");

    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    );
    cy.setCookie('accessToken', 'test-accessToken');
  });

  it('drag & drop ingredients', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-target="60d3b41abdacab0026a733c6"]')
      .trigger("dragstart")
      .trigger("dragleave");

    cy.wait(500);

    cy.get('[data-drop="dropzone"]')
      .trigger("dragenter")
      .trigger("dragover")
      .trigger("drop")
      .trigger("dragend");

    cy.wait(500);

    cy.get('[data-send]').click();

    cy.get('[data-test-id="order-number"]').contains('38633').should('exist');
  })
});