/// <reference types="Cypress" />
 
describe('My third timeTest Suite', function() 
{
 
it('My FirstTest case',function() {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

   // for selecting multiple checkboxes
   cy.get('input[type="checkbox"]').check(['option1', 'option3'])
//static dropdown

cy.get('select').select('option3').should('have.value','option3')

//dynamic dropdown

cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($el, index, $list) => 
      { 
       if($el.text()==="India")
       {
        cy.wrap($el).click()
       }
      })
      cy.get('#autocomplete').should('have.value', 'India')
//handling visible and invisible elements 
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      //handling with the radio buttons
      cy.get('input[value="radio2"]').check().should('be.checked')

 })
}  )