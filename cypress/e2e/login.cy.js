/// <reference types="cypress" />


const perfil = require ('../fixtures/perfil.json')

context ('Funcionalidade login', ( ) => {

beforeEach(() => {
    cy.visit ('minha-conta')

});

afterEach(() => {
    
    cy.screenshot()

});


it('Deve fazer login com sucesso', () => {
cy.get ('#username').type ('aluno_ebac@teste.com')
cy.get ('#password').type ('teste@teste.com')
cy.get('.woocommerce-form > .button') .click ()

cy.get('.page-title') .should('contain', 'Minha conta')    
cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain', 'Olá')
})


it('Deve fazer login com sucesso - usando base de dados', () => {
    cy.get ('#username').type (perfil.usuario)
    cy.get ('#password').type (perfil.senha)
    cy.get('.woocommerce-form > .button') .click ()
    
    cy.get('.page-title') .should('contain', 'Minha conta')    
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain', 'Olá')
    })


    it.only('Deve fazer login com sucesso - fixture', () => {
        cy.fixture ('perfil').then (dados => {

            cy.get ('#username').type (dados.usuario)
            cy.get ('#password').type (dados.senha, {log: false})
            cy.get('.woocommerce-form > .button') .click ()
            
            cy.get('.page-title') .should('contain', 'Minha conta')    
            

        })
        
        })




















    it('Deve fazer login com sucesso - usando base de dados', () => {
    cy.get ('#username').type (perfil.usuario)
    cy.get ('#password').type (perfil.senha)
    cy.get('.woocommerce-form > .button') .click ()
    
    cy.get('.page-title') .should('contain', 'Minha conta')    
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('contain', 'Olá')
    })


it('Deve exibir mensangem de erro ao inserir usuário inválido', () => {

    cy.get ('#username').type ('aluno_ebac@tt.com')
    cy.get ('#password').type ('teste@teste.com')
    cy.get('.woocommerce-form > .button') .click ()

    cy.get('.woocommerce-error > li') .should('contain', 'e-mail desconhecido')
})

it('Deve exibir mensangem de senha inválida', () => {

    cy.get ('#username').type ('aluno_ebac@teste.com')
    cy.get ('#password').type ('123456')
    cy.get('.woocommerce-form > .button') .click ()

    cy.get('.woocommerce-error > li') .should('contain', 'Erro: a senha ')
})


})


