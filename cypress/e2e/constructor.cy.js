describe('Burger constructor behavior', () => {
  it('drag & drop ingredients', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-target="60d3b41abdacab0026a733c6"]')
      .trigger("dragstart")
      .trigger("dragleave");

    cy.get('[data-drop="dropzone"]')
      .trigger("dragenter")
      .trigger("dragover")
      .trigger("drop")
      .trigger("dragend");

    cy.get('[data-send]').click();
    
    // cy.get('[name="email"]').type('alex@onepix.net');
    // cy.get('[name="password"]').type('bP47qmaXjy8NAn5');

    // cy.get('[data-signin]').click();

    // cy.get('[data-send]').click();
  })
})