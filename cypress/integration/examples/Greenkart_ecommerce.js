describe('Home page product', () => {
    it.skip('search feature: adding product based on the index', () => {
     
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get(".search-keyword").type('ro')
        cy.get('.product').should('have.length',5) //it will pass here for 5 elements because it is searchig for the whole page product visible or invisible

        //cy.get('.product:visible').should('have.length',2) this would be one of the method tofidnthe visile product.
        cy.get('.products').find('.product').should('have.length',4).eq(3).contains('ADD TO CART').click()
        // it will only count for the searched product value whic is four and add only the 4 index element.

    })

    it('search feature: adding all four product at the same time', () => {
     
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get(".search-keyword").type('ro')
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product')
     //will apply on the first product by default from thr list  
      
    })
 

  it('search feature: adding all four product at the same time', () => {
     
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get(".search-keyword").type('ro')
    cy.get('.products').as('productlocator')
    cy.get('@productlocator').find('.product-action > button').each(($el, index, $list) => 
    {
        $el.contains('CART').click()    //will apply on the first product by default from thr list  
     
    })
 //will apply on the first product by default from thr list  
  
})
})
