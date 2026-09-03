import { test, expect } from "@playwright/test";

test("Тестируем ручку получения списка товаров", async ({ request }) => {
  const response = await request.get("/api/productsList");
  expect(response.ok(), "Ответ сервера должен быть успешным").toBeTruthy();
  expect(response.status(), "Статус ответа должен быть 200").toBe(200);

  const body = await response.json();

  expect(body.responseCode).toBe(200);
  expect(body.products).toBeInstanceOf(Array);
  expect(body.products.length).toBeGreaterThan(0);

  for (const product of body.products) {
    expect(product).toHaveProperty("id");
    expect(product).toHaveProperty("name");
    expect(product).toHaveProperty("price");
    expect(product).toHaveProperty("brand");
    expect(product).toHaveProperty("category");

    expect(product.category).toHaveProperty("usertype");
    expect(product.category).toHaveProperty("category");
  }
});
