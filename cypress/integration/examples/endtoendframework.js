/// <reference types="Cypress" />

import HomePage from '../pageobjects/HomePage'

describe('handling child tabs', function() 
{
 
    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
        {
                 this.data=data
        })
        
      })
it('My FirstTest case',function() 
{
    const homepage = new HomePage()
   
    //cy.visit(cypress.env('url')+"/angularpractice/")
    cy.visit('https://rahulshettyacademy.com/angularpractice/')

  homepage.getEditBox().type(this.data.name)
    homepage.getGender().select(this.data.gender)
    
    homepage.getTwoWayDataBinding().should('have.value',this.data.name)
   homepage.getEditBox().should('have.attr', 'minlength', 2)
   homepage.getEntrepreneur().should('be.disabled')
    
    //making custom commands
    homepage.getShopTab().click()  //lick on the shop button and naigated to the product page
    

   // this.data.prductName      //this is my array now 
   this.data.prductName .forEach(function(element){
        
        cy.selectProduct(element)
      }); 
      cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
      //addition product values
       var sum=0
      cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
 
        const pricestring=$el.text()
        var res=pricestring.split(" ")
        //res[0] res [1]number
        var amount= res[1].trim()
         sum = Number(sum) + Number(amount)
             
        
        }).then(function(){
          cy.log(sum) 
        })
        
        //because javascript asynchronous before perfrpming sum it will print sum as 0 resolve promise

        cy.get('h3 strong').then(function(element){

          var actualtext=element.text()
          var res=actualtext.split(" ")
        //res[0] res [1]number
        var total= res[1].trim()

        expect(Number(total)).to.equal(sum)

        })  


      cy.contains('Checkout').click()
      cy.get('#country').type('india')
      
    //there is a timeout limit because it is taking more than 4 sec to loa india override in config.js
    
      cy.get('.suggestions > ul > li > a').click()
      cy.get('#checkbox2').click({force:true})
      cy.get('input[type="submit"]').click()
      cy.get('.alert').contains('Success')


 })
})