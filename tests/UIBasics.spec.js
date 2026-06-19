const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://rahulshettyacademy.com/loginpagePractise/';
const selectors = {
  username: 'input#username',
  password: '[name=password]',
  signInBtn: '#signInBtn',
  errorMessage: "[style*=block]",
  cardLinks: '.card-body a',
  roleDropdown: 'select.form-control',
  userRadio: 'span.checkmark',
  modalBody: '.modal-body p',
  modalOkBtn: '#okayBtn',
  termsCheckbox: '#terms',
  documentsLink: "[href*='documents-request']",
};

async function login(page, username, password) {
  await page.fill(selectors.username, username);
  await page.fill(selectors.password, password);
  await page.click(selectors.signInBtn);
}

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test('First Playwright Browser Context test', async ({ page }) => {
  await login(page, 'rahulshetty', 'Learning@830$3mK2');
  await expect(page.locator(selectors.errorMessage)).toContainText('Incorrect');

  await page.fill(selectors.username, '');
  await page.fill(selectors.username, 'rahulshettyacademy');
  await page.click(selectors.signInBtn);

  await expect(page.locator(selectors.cardLinks).first()).toBeVisible();
  await expect(page.locator(selectors.cardLinks).nth(1)).toBeVisible();
});

test('First Playwright dropdown box and radio button Practice', async ({ page }) => {
  await login(page, 'rahulshetty', 'Learning@830$3mK2');
  await expect(page.locator(selectors.errorMessage)).toContainText('Incorrect');

  await page.fill(selectors.username, '');
  await page.fill(selectors.username, 'rahulshettyacademy');
  await page.locator(selectors.userRadio).last().click();

  await expect(page.locator(selectors.modalBody)).toBeVisible();
  await page.click(selectors.modalOkBtn);
  await expect(page.locator(selectors.userRadio).last()).toBeChecked();

  await page.selectOption(selectors.roleDropdown, 'consult');
  await page.click(selectors.termsCheckbox);
  await expect(page.locator(selectors.documentsLink)).toHaveAttribute('class', 'blinkingText');
});

test('Child window handling', async ({ page }) => {
  const documentsLink = page.locator(selectors.documentsLink);

  await expect(documentsLink).toHaveAttribute('class', 'blinkingText');

  const [childPage] = await Promise.all([
    page.context().waitForEvent('page'),
    documentsLink.click(),
  ]);

  const text = await childPage.locator('p.red').textContent();
  const match = /@([^\s]+)/.exec(text || '');
  const domain = match?.[1] || '';

  await expect(domain).not.toBe('');
  await page.fill(selectors.username, domain);
  await expect(page.locator(selectors.username)).toHaveValue(domain);
});

test('First Playwright Page test', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveURL(/google\.com/);
});
