/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré cadastro', () => {

beforeEach(() => {
    cy.visit ('minha-conta')
    
});

it('Deve cadastrar usuário com sucesso', () => {
    
    let nomefake = faker.name.firstName()
    let sobrenomefake = faker.name.lastName()
    let emailfake = faker.internet.email(nomefake)



    cy.get('#reg_email').type(emailfake)
    cy.get('#reg_password').type(('teste1@teste'))
    cy.get(':nth-child(4) > .button').click ()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click ()

    cy.get('#account_first_name').type(nomefake)
    cy.get('#account_last_name').type(sobrenomefake)
    cy.get('.woocommerce-Button').click ()

    cy.get('.woocommerce-message').should ('contain', 'Detalhes da conta modificados com sucesso.')

});


it.only('Deve completar pré cadastro usando comandos customizados', () => {


    let emailfake2 = faker.internet.email()
   
    cy.preCadastro(emailfake2, 'senha!@forte', 'Fábio', 'Araújo')

    cy.get('.woocommerce-message').should ('contain', 'Detalhes da conta modificados com sucesso.')


    















    
});










    
});