export class RegistrationPage {
  constructor(page) {
    this.page = page;

    this.nameField = page.getByRole("textbox", { name: "Name" });

    this.signupButton = page.getByRole("button", { name: "Signup" });

    this.emailField = page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address");

    this.passwordField = page.getByRole("textbox", { name: "Password" });

    this.chooseMrs = page.getByRole("radio", { name: "Mrs." });
    this.chooseMr = page.getByRole("radio", { name: "Mr." });

    this.firstName = page.getByRole("textbox", { name: "First name *" });
    this.lastName = page.getByRole("textbox", { name: "Last name *" });

    this.addressField = page.getByRole("textbox", {
      name: "Address * (Street address, P.",
    });

    this.stateField = page.getByRole("textbox", { name: "State *" });
    this.cityField = page.getByRole("textbox", { name: "City" });
    this.zipcodeField = page.locator("#zipcode");
    this.telNumberField = page.getByRole("textbox", {
      name: "Mobile Number",
    });
    this.createButton = page.getByRole("button", { name: "Create Account" });
  }

  async enterName(name) {
    await this.nameField.fill(name);
  }

  async enterPassword(password) {
    await this.passwordField.fill(password);
  }

  async enterEmail(email) {
    await this.emailField.fill(email);
  }

  async enterFirstName(firstname) {
    await this.firstName.fill(firstname);
  }

  async enterLastName(lastname) {
    await this.lastName.fill(lastname);
  }

  async enterAddress(street) {
    await this.addressField.fill(street);
  }

  async chooseCountry() {
    await this.page.getByLabel("Country *").selectOption("Canada");
  }

  async chooseState(state) {
    await this.stateField.fill(state);
  }

  async enterCity(city) {
    await this.cityField.fill(city);
  }

  async enterCode(zipcode) {
    await this.zipcodeField.fill(zipcode);
  }

  async enterTelNumber(num) {
    await this.telNumberField.fill(num);
  }

  async createAccount() {
    await this.createButton.click();
  }
}
