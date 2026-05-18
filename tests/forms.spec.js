const { test, expect } = require('@playwright/test');

test.describe('Forms — Newsletter & Search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('newsletter form is present with email input and submit', async ({ page }) => {
    const form = page.locator('#newsletterForm');
    await expect(form).toBeAttached();
    await expect(form.locator('input[type="email"]')).toBeAttached();
    await expect(form.locator('button[type="submit"]')).toBeAttached();
  });

  test('newsletter rejects invalid email with error message', async ({ page }) => {
    await page.locator('#newsletterForm').scrollIntoViewIfNeeded();
    await page.locator('#newsletterForm').evaluate((el) => el.setAttribute('novalidate', ''));
    const input = page.locator('#newsletterEmail');
    await input.evaluate((el) => {
      el.removeAttribute('required');
      el.setAttribute('type', 'text');
    });
    await input.fill('not-an-email');
    await page.locator('#newsletterForm button[type="submit"]').click();
    const message = page.locator('#newsletterMessage');
    await expect(message).toHaveAttribute('data-state', 'error');
    await expect(message).not.toBeEmpty();
  });

  test('newsletter accepts valid email with success message', async ({ page }) => {
    await page.locator('#newsletterForm').scrollIntoViewIfNeeded();
    await page.locator('#newsletterEmail').fill('test@example.com');
    await page.locator('#newsletterForm button[type="submit"]').click();
    const message = page.locator('#newsletterMessage');
    await expect(message).toHaveAttribute('data-state', 'success');
    await expect(message).not.toBeEmpty();
  });

  test('newsletter clears input after successful submit', async ({ page }) => {
    await page.locator('#newsletterForm').scrollIntoViewIfNeeded();
    const input = page.locator('#newsletterEmail');
    await input.fill('test@example.com');
    await page.locator('#newsletterForm button[type="submit"]').click();
    await expect(input).toHaveValue('');
  });

  test('search toggle reveals input when clicked', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const form = page.locator('#searchForm');
    await expect(form).not.toHaveClass(/open/);
    await page.locator('#searchToggle').click();
    await expect(form).toHaveClass(/open/);
  });

  test('search input gets focus when opened', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.locator('#searchToggle').click();
    await page.waitForTimeout(200);
    const focused = await page.evaluate(() => document.activeElement?.classList?.contains('search-input'));
    expect(focused).toBe(true);
  });

  test('search closes when clicking outside', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.locator('#searchToggle').click();
    await expect(page.locator('#searchForm')).toHaveClass(/open/);
    await page.locator('.hero-title').click({ position: { x: 5, y: 5 } });
    await expect(page.locator('#searchForm')).not.toHaveClass(/open/);
  });
});
