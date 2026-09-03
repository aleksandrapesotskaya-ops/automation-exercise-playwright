# Automation Exercise - Playwright Tests

Пет-проект для практики UI- и API- автоматизации на JavaScript + Playwright.
Проект построен на базе учебного интернет-магазина AutomationExercise (https://automationexercise.com/)

## Цели проекта:
- практика автоматизации UI-сценариев;
- изучение API-тестирования;
- применение и изучение Page Object Model;
- работа с HTTP-запросами и проверкой API-ответов.

## Tech stack

- JavaScript
- Playwright
- Page Object Model (POM)
- GitHub

## Что автоматизировано
- Успешная регистрация пользователя
- Авторизация
- Неуспешная авторизация
- Добавление товара в корзину
- Поиск товара
- Проверка существования аккаунта пользователя

## Структура проекта

```text
automation-exercise-playwright/
├── pages/
│   ├── LoginPage.js
│   ├── RegistrationPage.js
│   └── Cart.js
│
├── tests/
│   ├── API/
│   │   ├── get-all-products.spec.js
│   │   └── verify-login.spec.js
│   │
│   ├── auth/
│   │   ├── login-user.spec.js
│   │   └── unsuccessful-login-user.spec.js
│   │
│   ├── cart/
│   │   └── add-item-to-cart.spec.js
│   │
│   └── reg/
│      └── registration-user.spec.js
│
├── utils/
│   └── testData.js
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## How to Run
npm install

npx playwright install

npx playwright test