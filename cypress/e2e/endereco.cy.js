/// <reference types="cypress" />

describe('Funcionalidade endereços - Faturamento e entrega  ', () => {
   
   beforeEach(() => {
    cy.visit ('minha-conta')
    cy.fixture ('perfil') .then(dados =>{
        cy.login(dados.usuario, dados.senha)
    })
    

   });
   
    it('Deve fazer faturamento com sucesso', () => {

        
        // login (criar comando customizado)
        //cadastro endereço 
    });
});