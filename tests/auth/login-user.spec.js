import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test("Проверка успешного логина", async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto("");
  await login.loginButton.click();

  await expect(
    page.getByRole("heading", { name: "Login to your account" }),
  ).toBeVisible();

  await login.enterEmail("test12345@ya.ru");
  await login.enterPassword("qwerty123");
  await login.loginUser();
  await expect(page.getByText("Logged in as test12345")).toBeVisible();
});
