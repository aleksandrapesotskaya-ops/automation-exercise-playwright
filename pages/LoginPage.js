export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.getByRole("link", { name: "Signup / Login" });
    this.emailField = page
      .locator("form")
      .filter({ hasText: "Login" })
      .getByPlaceholder("Email Address");
    this.passwordField = page.getByRole("textbox", { name: "Password" });
  }
  async enterEmail(email) {
    await this.emailField.click();
    await this.emailField.fill(email);
  }
  async enterPassword(password) {
    await this.passwordField.click();
    await this.passwordField.fill(password);
  }
  async loginUser() {
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
