export class CartPage {
  constructor(page) {
    this.page = page;
    this.viewProductButton = page
      .getByRole("link", {
        name: "View Product",
      })
      .first();
    this.addToCartButton = page.getByRole("button", { name: "Add to cart" });
    this.continueShoppingButton = page.getByRole("button", {
      name: "Continue Shopping",
    });
    this.openCartButton = page.getByRole("link", { name: "Cart" });
  }
  async viewProduct() {
    await this.viewProductButton.click();
  }
  async addToCart() {
    await this.addToCartButton.click();
  }
  async continueAfterAddingCart() {
    await this.continueShoppingButton.click();
  }

  async openCart() {
    await this.openCartButton.click();
  }
}
