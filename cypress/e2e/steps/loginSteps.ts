import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

Given('I visit the Swag Labs login page', ()=>{
    cy.visit('/')
})

When('I enter username {string} and password {string}',(username:string, password:string)=>{
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)

})

When('I click the login button', ()=>{
    cy.get('[data-test="login-button"]').click()
})

Then('I should be redirected to the inventory page', ()=>{
    expect(cy.url()).to.include('/inventory.html')
})