
/// <reference types="cypress" />

describe('Funcionalidade página de compra de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block > .block-inner > .image > .product-image > .image-hover').first()
        //.last()
        //.eq(3)
        
        
        .click()


        


        });


        it('Deve adicionar ao carrinho', () => {
            var quantidade = 2
            
            
            cy.get('.product-block > .block-inner > .image > .product-image > .image-hover').first().click()
            cy.get('.button-variable-item-XS').click()
            cy.get('.button-variable-item-Blue').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)   

    });




});






