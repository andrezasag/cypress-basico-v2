Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Andreza')
    cy.get('#lastName').type('Goncalves')
    cy.get('#email').type('andreza.sag@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

})
