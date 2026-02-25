// tests/helpers/helper.js
const { expect } = require('@playwright/test');

/**
 * Reusable login function
 */
async function login(page, username = 'standard_user', password = 'secret_sauce') {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');

  if (username === 'standard_user' && password === 'secret_sauce') {
    await expect(page.url()).toContain('inventory.html');
    console.log('Login successful, navigated to inventory page');
  } else {
    await expect(page.locator('[data-test="error"]')).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  }
}

/**
 * Add specific item to cart
 */
async function addItemToCart(page, itemId = 'sauce-labs-backpack') {
  await page.click(`button[id="add-to-cart-${itemId}"]`);
  await page.locator('a.shopping_cart_link').click();
  await expect(page.locator(`button[id="remove-${itemId}"]`)).toHaveCount(1);
  console.log(`Item ${itemId} added to cart`);
}

async function removeItemFromCart(page, itemId = 'sauce-labs-backpack') {
  await page.click(`button[id="remove-${itemId}"]`);
  await expect(page.locator(`button[id="add-to-cart-${itemId}"]`)).toHaveCount(0);
  console.log(`Item ${itemId} removed from cart`);
}

/**
 * Checkout function
 */
async function checkout(page, userInfo = { firstName: 'Ankit', lastName: 'Choudhary', postalCode: '121005' }) {
  await page.click('button[id="checkout"]');
  await page.fill('#first-name', userInfo.firstName);
  await page.fill('#last-name', userInfo.lastName);
  await page.fill('#postal-code', userInfo.postalCode);
  await page.click('#continue');
  await page.click('#finish');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  console.log('Checkout completed successfully');
}

module.exports = { login, addItemToCart, checkout ,removeItemFromCart};