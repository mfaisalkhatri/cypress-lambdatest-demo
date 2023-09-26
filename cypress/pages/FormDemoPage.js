import { faker } from '@faker-js/faker';

class FormDemoPage {
  webElements = {
    nameField: () => cy.get("#name"),
    emailField: () => cy.get("#inputEmail4"),
    passwordField: () => cy.get("#inputPassword4"),
    companyField: () => cy.get("#company"),
    websiteField: () => cy.get("#websitename"),
    countryField: () => cy.get(":nth-child(3) > .pr-20 > .w-full"),
    cityField: () => cy.get("#inputCity"),
    addressLineOneField: () => cy.get("#inputAddress1"),
    addressLineTwoField: () => cy.get("#inputAddress2"),
    stateField: () => cy.get("#inputState"),
    zipCodeField: () => cy.get("#inputZip"),
    submitBtn: () => cy.get(".bg-lambda-900"),
    successMessageText: () => cy.get(".success-msg"),
  };

  fillForm() {
    this.webElements.nameField().type(faker.person.fullName());
    this.webElements.emailField().type(faker.internet.email());
    this.webElements.passwordField().type("Password@1234");
    this.webElements.companyField().type(faker.company.name());
    this.webElements.websiteField().type(faker.internet.domainName());
    this.webElements.countryField().select("India");
    this.webElements.cityField().type(faker.location.city());
    this.webElements
      .addressLineOneField()
      .type(faker.location.streetAddress(false));
    this.webElements.addressLineTwoField().type(faker.location.street());
    this.webElements.stateField().type(faker.location.state());
    this.webElements.zipCodeField().type(faker.location.zipCode());
    this.webElements.submitBtn().click();
  }

  getSuccessMessageText() {
    return this.webElements.successMessageText();
  }
}
module.exports = new FormDemoPage();
