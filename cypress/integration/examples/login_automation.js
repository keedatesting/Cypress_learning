describe('login with correct cred', ()=> {
    it('login with correct credentials', ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('[data-qa="login-email"]').type('testingnamo@gmail.com')
        cy.get('[data-qa="login-password"]').type('Test@1234')
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
    })

    it.skip('login with incorrect credentials', ()=>{
        cy.visit("https://automationexercise.com/")
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('[data-qa="login-email"]').type('testingnamo12345@gmail.com')
        cy.get('[data-qa="login-password"]').type('Test@123457')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').contains('incorrect')
    })

})