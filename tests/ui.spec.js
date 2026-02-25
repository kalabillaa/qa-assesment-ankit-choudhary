const { test } = require('@playwright/test');
const { login, addItemToCart, checkout,removeItemFromCart } = require('./helper');

test('Login valid test', async ({ page }) => {
  await login(page, 'standard_user', 'secret_sauce');
});

test('Login invalid test', async ({ page }) => {
  await login(page, 'invalid_user', 'invalid_password');
});

test('Add to cart test', async ({ page }) => {
  await login(page);
  await addItemToCart(page, 'sauce-labs-backpack');
  await removeItemFromCart(page, 'sauce-labs-backpack');
});


test('Checkout test', async ({ page }) => {
  await login(page);
  await addItemToCart(page, 'sauce-labs-backpack');
  await checkout(page, { firstName: 'Ankit', lastName: 'Choudhary', postalCode: '121005' });
});