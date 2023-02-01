///////////////////////////// Exercicioextra2 - Seção8 (usar/abrir em outra aba do navegador)  /////////////////////////////

it('atesta a página da política de privacidade de forma independente', function() {
        cy.visit('./src/privacy.html')
        cy.contains('Talking About Testing').should('be.visible')
    })
