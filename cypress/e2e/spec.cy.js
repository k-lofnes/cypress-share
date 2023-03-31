describe("Comparison in PLP", () => {
  it("Compare products", () => {
    cy.viewport("iphone-6");
    cy.visit(
      "https://www.elkjop.no/mobil-nettbrett-og-smartklokker/mobiltelefon/iphone"
    );
    cy.get(".compare-action-icon").eq(0).click();
    cy.get(".compare-action-icon").eq(1).click();
    cy.get(".compare-banner__button").click();
    cy.get(".button").click();
    cy.get(".compare-overlay").should("be.visible");
    cy.get(".compare-header__img").and(($img) => {
      expect($img[0].width).to.be.greaterThan(0);
      expect($img[1].width).to.be.greaterThan(0);
    });
  });
});
