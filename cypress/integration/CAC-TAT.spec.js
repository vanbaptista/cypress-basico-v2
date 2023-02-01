// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

////////////////////////////// Exercicio1 - Seção2  /////////////////////////////
/// describe('Central de Atendimento ao Cliente TAT', function() {
///    it('verifica o título da aplicação', function() {
 ///     cy.visit('./src/index.html')

 ///     cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
 ///   })
 /// })


 ///////////////////////////// Exercicio1 - Seção3  (Preenche os campos obrigatórios com beforeEach)  /////////////////////////////
/// describe('Central de Atendimento ao Cliente TAT', function() {
 /// beforeEach(function() {
///    cy.visit('./src/index.html')
 /// })

 ///  it('verifica o título da aplicação', function() {
 ///    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
 ///  })

 /// it.only('preenche os campos obrigatórios e envia o formulário', function() {
 ///   cy.get('#firstName').type('Vanessa')
 ///   cy.get('#lastName').type('Baptista')
 ///   cy.get('#email').type('vanessafer.baptista@gmail.com')
 ///   cy.get('#open-text-area').type('Teste')
 ///   cy.get('button[type="submit"]').click()

 ///   cy.get('.success').should('be.visible')
 /// })
///})

 ///////////////////////////// Exercicio Extra1 - Seção3 (LONG Text com Delay)  /////////////////////////////

 /// describe('Central de Atendimento ao Cliente TAT', function() {
 /// beforeEach(function() {
 ///   cy.visit('./src/index.html')
 /// })

 ///  it('verifica o título da aplicação', function() {
 ///    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
 ///  })

 /// it.only('preenche os campos obrigatórios e envia o formulário', function() {
 ///   const longText = 'Teste, teste, teste, teste, teste, teste, , teste, teste, teste, , teste, teste, teste, teste, teste, teste, teste, teste, teste' 
    
 ///   cy.get('#firstName').type('Vanessa')
 ///   cy.get('#lastName').type('Baptista')
 ///   cy.get('#email').type('vanessafer.baptista@gmail.com')
 ///   cy.get('#open-text-area').type(longText, {delay: 0})
 ///   cy.get('button[type="submit"]').click()

 ///   cy.get('.success').should('be.visible')
 /// })
///})
 

 ///////////////////////////// Exercicio Extra2 - Seção3 (Classe Error - quando e-mail estiver inválido)  /////////////////////////////

 ///describe('Central de Atendimento ao Cliente TAT', function() {
 /// beforeEach(function() {
  ///  cy.visit('./src/index.html')
 /// })

 ///  it('verifica o título da aplicação', function() {
 ///    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
 ///  })

 /// it('preenche os campos obrigatórios e envia o formulário', function() {
 ///   const longText = 'Teste, teste, teste, teste, teste, teste, , teste, teste, teste, , teste, teste, teste, teste, teste, teste, teste, teste, teste' 
    
 ///   cy.get('#firstName').type('Vanessa')
 ///   cy.get('#lastName').type('Baptista')
 ///   cy.get('#email').type('vanessafer.baptista@gmail.com')
 ///   cy.get('#open-text-area').type(longText, {delay: 0})
 ///   cy.get('button[type="submit"]').click()

 ///   cy.get('.success').should('be.visible')
 /// })

///  it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
 ///   cy.get('#firstName').type('Vanessa')
 ///   cy.get('#lastName').type('Baptista')
 ///   cy.get('#email').type('vanessafer.baptista@gmail,com')
 ///   cy.get('#open-text-area').type('Teste')
///    cy.get('button[type="submit"]').click()

 ///   cy.get('.error').should('be.visible')
 /// })

///})

 ///////////////////////////// Exercicio Extra3 - Seção3 (Imput valor vazio quando não numérico)  /////////////////////////////

  ///describe('Central de Atendimento ao Cliente TAT', function() {
  ///beforeEach(function() {
  ///  cy.visit('./src/index.html')
  ///})

  ///  it('verifica o título da aplicação', function() {
  ///   cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
 ///   })

 /// it('preenche os campos obrigatórios e envia o formulário', function() {
  ///  const longText = 'Teste, teste, teste, teste, teste, teste, , teste, teste, teste, , teste, teste, teste, teste, teste, teste, teste, teste, teste' 
    
 ///   cy.get('#firstName').type('Vanessa')
 ///   cy.get('#lastName').type('Baptista')
  ///  cy.get('#email').type('vanessafer.baptista@gmail.com')
  ///  cy.get('#open-text-area').type(longText, {delay: 0})
  ///  cy.get('button[type="submit"]').click()

  ///  cy.get('.success').should('be.visible')
  ///})

 /// it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
  ///  cy.get('#firstName').type('Vanessa')
  ///  cy.get('#lastName').type('Baptista')
  ///  cy.get('#email').type('vanessafer.baptista@gmail,com')
  ///  cy.get('#open-text-area').type('Teste')
  ///  cy.get('button[type="submit"]').click()

  ///  cy.get('.error').should('be.visible')
  ///})

  ///it.only('campo telefone continua vazio quando preenchido com valor não-numérico', function() {
  /// cy.get('#phone')
  ///   .type('abcdefghij')
  ///   .should('have.value', '')
 ///})

 ///})

 ///////////////////////////// Exercicio Extra4 - Seção3 (Checkbox não selecionado com campo obrigatório)  /////////////////////////////
  ///describe('Central de Atendimento ao Cliente TAT', function() {
  /// beforeEach(function() {
  ///   cy.visit('./src/index.html')
  /// })
 
  ///   it('verifica o título da aplicação', function() {
   ///   cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  ///   })
 
   ///it('preenche os campos obrigatórios e envia o formulário', function() {
  ///   const longText = 'Teste, teste, teste, teste, teste, teste, , teste, teste, teste, , teste, teste, teste, teste, teste, teste, teste, teste, teste' 
     
   ///  cy.get('#firstName').type('Vanessa')
   ///  cy.get('#lastName').type('Baptista')
  ///   cy.get('#email').type('vanessafer.baptista@gmail.com')
  ///   cy.get('#open-text-area').type(longText, {delay: 0})
   ///  cy.get('button[type="submit"]').click()  
 
  ///   cy.get('.success').should('be.visible')
  /// })
 
  ///  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
  ///   cy.get('#firstName').type('Vanessa')
  ///   cy.get('#lastName').type('Baptista')
  ///   cy.get('#email').type('vanessafer.baptista@gmail,com')
  ///   cy.get('#open-text-area').type('Teste')
  ///   cy.get('button[type="submit"]').click()
 
  ///   cy.get('.error').should('be.visible')
  /// })
 
  /// it('campo telefone continua vazio quando preenchido com valor não-numérico', function() {
  ///  cy.get('#phone')
  ///    .type('abcdefghij')
  ///    .should('have.value', '')
  ///   })

  /// it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
  ///   cy.get('#firstName').type('Vanessa')
  ///   cy.get('#lastName').type('Baptista')
  ///   cy.get('#email').type('vanessafer.baptista@gmail.com')
  ///   cy.get('#phone-checkbox').click()
  ///   cy.get('#open-text-area').type('Teste')
  ///   cy.get('button[type="submit"]').click()
 
  ///   cy.get('.error').should('be.visible')
  /// })
  ///})

 ///////////////////////////// Exercicio Extra5 - Seção3 (clear)  /////////////////////////////

 describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function() {
    cy.visit('./src/index.html')
  })
 
    it('verifica o título da aplicação', function() {
     cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
 
  it('preenche os campos obrigatórios e envia o formulário', function() {
    const longText = 'Teste, teste, teste, teste, teste, teste, , teste, teste, teste, , teste, teste, teste, teste, teste, teste, teste, teste, teste' 
     
    cy.get('#firstName').type('Vanessa')
    cy.get('#lastName').type('Baptista')
    cy.get('#email').type('vanessafer.baptista@gmail.com')
    cy.get('#open-text-area').type(longText, {delay: 0})
    cy.contains('button', 'Enviar').click()
 
    cy.get('.success').should('be.visible')
  })
 
   it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    cy.get('#firstName').type('Vanessa')
    cy.get('#lastName').type('Baptista')
    cy.get('#email').type('vanessafer.baptista@gmail,com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
 
    cy.get('.error').should('be.visible')
  })
 
  it('campo telefone continua vazio quando preenchido com valor não-numérico', function() {
   cy.get('#phone')
     .type('abcdefghij')
     .should('have.value', '')
    })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
    cy.get('#firstName').type('Vanessa')
    cy.get('#lastName').type('Baptista')
    cy.get('#email').type('vanessafer.baptista@gmail.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
 
    cy.get('.error').should('be.visible')
  })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
      cy.get('#firstName')
        .type('Vanessa')
        .should('have.value','Vanessa')
        .clear()
        .should('have.value','')
      cy.get('#lastName')
        .type('Baptista')
        .should('have.value','Baptista')
        .clear()
        .should('have.value','')
      cy.get('#email')
        .type('vanessafer.baptista@gmail.com')
        .should('have.value','vanessafer.baptista@gmail.com')
        .clear()
        .should('have.value','')
      cy.get('#phone')
        .type('1234567890')
        .should('have.value','1234567890')
        .clear()
        .should('have.value','')
      })

 ///////////////////////////// Exercicio Extra6 - Seção3 (nao preencher nenhum campo obrigatório)  /////////////////////////////

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
      cy.contains('button', 'Enviar').click()

      cy.get('.error').should('be.visible')
    })

 ///////////////////////////// Exercicio Extra7 - Seção3 (comando customizados)  /////////////////////////////

 it('envia o formuário com sucesso usando um comando customizado', function() {
  cy.fillMandatoryFieldsAndSubmit()
  
  cy.get('.success').should('be.visible')
  })

 ///////////////////////////// Exercicio Extra8 - Seção3 (comando cy.contains())  /////////////////////////////

 it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
  cy.contains('button', 'Enviar').click()

  cy.get('.error').should('be.visible')
})


 ///////////////////////////// Exercicio - Seção4 (comando cy.select())  /////////////////////////////

 it('seleciona um produto (YouTube) por seu texto', function() {
  cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube')
  })

 ///////////////////////////// Exercicioextra1 - Seção4 (comando cy.select())  /////////////////////////////

 it('seleciona um produto (Mentoria) por seu valor (value)', function() {
  cy.get('#product')
    .select('mentoria')
    .should('have.value', 'mentoria')
  })

 ///////////////////////////// Exercicioextra2 - Seção4 (comando cy.select())  /////////////////////////////

 it('seleciona um produto (Blog) por seu índice', function() {
  cy.get('#product')
    .select(1)
    .should('have.value', 'blog')
  })

  ///////////////////////////// Exercicio - Seção5 (comando cy.check())  /////////////////////////////

  it('marca o tipo de atendimento "Feedback"', function() {
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('have.value', 'feedback')
    })

    ///////////////////////////// Exercicioextra - Seção5 (comando cy.check())  /////////////////////////////

    it('marca cada tipo de atendimento', function() {
      cy.get('input[type="radio"]')
      .should('have.length', 3) //contamos quantos tinha
      .each(function($radio){ // passamos cada elemento
        cy.wrap($radio).check() // verificamos cada elemento
        cy.wrap($radio).should('be.checked')
      })
      })

     ///////////////////////////// Exercicio - Seção6 (comando cy.uncheck())  /////////////////////////////

     it('marca ambos checkboxes, depois desmarca o último', function() {
      cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked') //verifica que está marcado
        .last()
        .uncheck()
        .should('not.be.checked')
     })
     ///////////////////////////// Exercicioextra - Seção7 (comando cy.uncheck())  /////////////////////////////
// revendo teste e atualizando com click: exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário

  ///////////////////////////// Exercicio - Seção6 (comando selectFile())  /////////////////////////////
  
  it('seleciona um arquivo da pasta fixtures', function() {
    cy.get('input[type="file"]#file-upload')
      .should('not.have.value') //verifica que não tem nenhum valor
      .selectFile('./cypress/fixtures/example.json') //caminho onde o arqquivo esta
      .should(function($input){ //recebeu função que verificou nome (dados pegos inspecionando o comando do appteste)
        expect($input[0].files[0].name).to.equals('example.json')
      })
   })

   ///////////////////////////// Exercicioextra1 - Seção7 (comando selectFile())  /////////////////////////////

   it('seleciona um arquivo simulando um drag-and-drop', function() {
    cy.get('input[type="file"]#file-upload')
      .should('not.have.value') 
      .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'}) //simulando 'arrastando' doc pra campo de upload
      .should(function($input){ 
        expect($input[0].files[0].name).to.equals('example.json')
      })
   })

   
   ///////////////////////////// Exercicioextra2 - Seção7 (comando selectFile())  /////////////////////////////

   it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
     cy.fixture('example.json').as('sampleFile') //simulando 'alias' não precisa colocar o caminho todo do arquivo
     cy.get('input[type="file"]')
     .selectFile('@sampleFile') // chamando o 'alias'
     .should(function($input){ 
      expect($input[0].files[0].name).to.equals('example.json')
      })
   })


///////////////////////////// Exercicio - Seção8 (usar/abrir em outra aba do navegador)  /////////////////////////////

it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
  cy.get('#privacy a').should('have.attr', 'target', '_blank')
  })

///////////////////////////// Exercicioextra1 - Seção8 (usar/abrir na mesma aba do navegador)  /////////////////////////////

it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
  cy.get('#privacy a')
    .invoke('removeAttr', 'target')
    .click()

  cy.contains('Talking About Testing').should('be.visible')
  })

})