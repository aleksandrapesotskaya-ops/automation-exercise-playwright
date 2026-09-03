import { test, expect } from "@playwright/test";

test("Проверка существования аккаунта по логину и паролю", async ({
  request,
}) => {
  const response = await request.post("/api/verifyLogin", {
    multipart: {
      email: "test12345@ya.ru",
      password: "qwerty123",
    },
  });

  expect(response.status(), "Статус ответа должен быть 200").toBe(200);

  const body = await response.json();

  expect(body.responseCode).toBe(200);
  expect(body.message).toBe("User exists!");
});
