describe('Adding product from the page', () => {
    it.skip('verifying product is being added with the add to cart button with index', () => {
      cy.visit('https://automationexercise.com/products')
      //hardcoding with indexing adding the product using index
      cy.wait(3000)
      cy.get('.features_items').find('.col-sm-4').eq(2).contains('Add to cart').click();   
    })

    it('verifying product is being added with the add to cart button dynamically', () => {
      
        cy.visit('https://automationexercise.com/products')
        //hardcoding with indexing adding the product using index
        cy.wait(3000)
        cy.get('.features_items').as('mainblockofitems')
       cy.get('@mainblockofitems').find('.col-sm-4').each(($el, index, $list)=>{
         const productName1= $el.find('div h2').text()
         if(productName1.includes('1000'))
         {
         cy.wrap($el).find('.add-to-cart').click({multiple: true, force: true}).then(function(){

          console.log("items has beeen added")
         })
         }
        })
        console.log("learning")

        // const logo = cy.get('a img')
        // cy.log(logo.text())   cypress confuseto take directly in the vrible so first resolve the promis then take it in a variable
        cy.get('a img').then(function(elementlogo){
          cy.log(elementlogo.text())
        })
       
    })

  })