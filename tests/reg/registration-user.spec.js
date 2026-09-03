import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../pages/RegistrationPage";
import { generateEmail } from "../../utils/testData";
import { LoginPage } from "../../pages/LoginPage";

test("Успешная регистрация", async ({ page }) => {
  const registration = new RegistrationPage(page);
  const login = new LoginPage(page);

  const email = generateEmail();

  await page.goto("");
  await login.loginButton.click();

  await expect(
    page.getByRole("heading", { name: "New User Signup!" }),
  ).toBeVisible();

  await registration.enterName("Test");
  await registration.enterEmail(email);

  await registration.signupButton.click();

  await registration.chooseMrs.check();

  await registration.enterPassword("qwerty123");
  await registration.enterFirstName("Test");
  await registration.enterLastName("User");
  await registration.enterAddress("Test Street 1");
  await registration.chooseCountry();
  await registration.chooseState("Ontario");
  await registration.enterCity("Toronto");
  await registration.enterCode("12345");
  await registration.enterTelNumber("1234567890");
  await registration.createAccount();

  await page.waitForURL(/\/account_created/);
  await expect(page.getByText("Account Created!")).toBeVisible();
});
