class MainPage {

  
  webElements = {
    inputFormDemoLink: () => cy.get(":nth-child(18) > .text-black")
  };

  navigateToFormDemoPage() {
    this.webElements.inputFormDemoLink().click();
  }
}
module.exports = new MainPage();
