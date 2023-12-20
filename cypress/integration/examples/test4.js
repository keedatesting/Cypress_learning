/// <reference types="Cypress" />
 
describe('My fouth timeTest Suite', function() 
{
 
it('My FirstTest case',function() 
{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click() //alerts which cpress is handling automatically.
    //window:alert
    cy.on('windows:alert', (str)=>
    {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('windows:confirm', (str)=>
    {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })


 })
})