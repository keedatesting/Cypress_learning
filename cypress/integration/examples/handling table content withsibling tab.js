/// <reference types="Cypress" />
 
describe('handling child tabs', function() 
{
 
it('My FirstTest case',function() 
{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //how to immediately find the next sibling we use space for parent child relationhip we use method .next
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => 
      { 
       const text = $el.text()
       if(text.includes("Python"))
       {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
        {
           const pricetext =price.text()
            // because text is jquery command so we have have to resolve the promise first and tke it in a variable then use it.
            expect(pricetext).to.equal('25')
        })
       }
      })


 })
})