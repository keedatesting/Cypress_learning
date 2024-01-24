describe('My First Test', () => {
    it('Automation', () => {
      cy.visit('https://automationexercise.com/products')
      cy.get('.features_items  .col-sm-4').as('allproduts')
      
    })
  })