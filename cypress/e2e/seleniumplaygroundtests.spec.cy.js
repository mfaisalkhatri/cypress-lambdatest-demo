import mainPage from "../pages/MainPage.js";
import formDemoPage from "../pages/FormDemoPage.js";

describe("Selenium Playground Demo Tests for Form Demo Page", () => {
  it("should fill in the form on the form demo page and verify the success message", () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/');
    mainPage.navigateToFormDemoPage();
    formDemoPage.fillForm();
    formDemoPage
      .getSuccessMessageText()
      .should(
        "have.text",
        "Thanks for contacting us, we will get back to you shortly."
      );
  });
});
