import { test, expect } from "@playwright/test";
import { CartPage } from "../../pages/Cart";

test("Проверка добавления товара в корзину", async ({ page }) => {
  const cart = new CartPage(page);

  await page.goto("", { waitUntil: "domcontentloaded" });
  await cart.viewProduct();
  await expect(page.getByRole("heading", { name: "Blue Top" })).toBeVisible();

  await cart.addToCart();
  await expect(page.getByRole("heading", { name: "Added!" })).toBeVisible();

  await cart.continueAfterAddingCart();
  await expect(page.getByRole("heading", { name: "Added!" })).toBeHidden();

  await cart.openCart();
  await expect(page.getByText("Blue Top")).toBeVisible();
});
