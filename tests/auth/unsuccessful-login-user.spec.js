import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test("Проверка неуспешного логина", async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto("");
  await login.loginButton.click();

  await expect(
    page.getByRole("heading", { name: "Login to your account" }),
  ).toBeVisible();

  await login.enterEmail("test123456@ya.ru");
  await login.enterPassword("qwerty123");
  await login.loginUser();
  await expect(
    page.getByText("Your email or password is incorrect!"),
  ).toBeVisible();
});
