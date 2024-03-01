describe('Handling all Web related Ui elements of the page', () => {
    it.skip('verify that from static dropdwn the value is getting selected', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
      })

      it.skip('verify that from dynamic dropdown india is selecting', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.wait(3000)
        cy.get('.ui-menu-item-wrapper').each(($el,index,$list)=>{
        
            if($el.text()==="India")
            {
                cy.wrap($el).click();
                
            }
            })
            cy.get('#autocomplete').should('have.value','India')
      })

      it.skip('verify that multiple checkboxes are being checked', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption3').check().should('be.checked')
      })

      it.skip('verify that  checkboxes are being Unchecked', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
      })

      it('verify that radiobuttons are being checked', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio2"]').check().should('have.value','radio2')
      })

      it('verify that radiobuttons are being UNchecked', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio2"]').check().should('have.value','radio2')
        cy.get('input[value="radio2"]').uncheck().should('not.be.checked')
      }) 

  })