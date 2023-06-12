/// <reference types="cypress" />


describe('CI-CD Gallery App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173')
    })
  
    it('has navbar', () => {
      cy.get('.navbar').should('exist')
    })
    it('navbar link has correct href', () => {
      cy.get('.navbar .nav-link').should('have.attr', 'href', 'https://github.com/coolusername244')
    })
  })
  