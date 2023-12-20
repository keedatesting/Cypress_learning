/// <reference types="cypress"/>  
//this command is for auto intelligence of all the cypres methods.


describe('My First Test suite', () => {
    it('first test spec', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product:visible').should('have.length',4)

      //parent child mapping
      cy.get('.products').as('productlocator')
      cy.get('@productlocator').find('.product').should('have.length',4)
      cy.get('@productlocator').find('.product').eq(1).contains('ADD TO CART').click()
      console.log('namrata')

      cy.get('@productlocator').find('.product').each(($el, index, $list) => 
      {
        const vegtext=$el.find('h4.product-name').text()   //will apply on the first product by default from thr list  
       if(vegtext.includes('Cashews'))
       {
        cy.wrap($el).find('button').click()
       }
      })
      //this is to assert
      cy.get('.brand').should('have.text','GREENKART')

      //this is to print in inlog
      cy.get('.brand').then(function(logoel)
      {
        cy.log(logoel.text())
      })

     
    })
  })