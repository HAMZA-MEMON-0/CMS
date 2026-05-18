const { test, expect } = require('@playwright/test');

test.describe('Dark mode / theme toggle', () => {
  test('theme toggle button is present and accessible', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#themeToggle');
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-label', /mode/i);
  });

  test('clicking toggle switches data-theme attribute', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    const initial = await html.getAttribute('data-theme');
    await page.locator('#themeToggle').click();
    const updated = await html.getAttribute('data-theme');
    expect(updated).not.toBe(initial);
    expect(['light', 'dark']).toContain(updated);
  });

  test('clicking twice returns to original theme', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    const initial = await html.getAttribute('data-theme');
    await page.locator('#themeToggle').click();
    await page.locator('#themeToggle').click();
    await expect(html).toHaveAttribute('data-theme', initial);
  });

  test('theme persists across page reload via localStorage', async ({ page }) => {
    await page.goto('/');
    await page.locator('#themeToggle').click();
    const afterClick = await page.locator('html').getAttribute('data-theme');

    const stored = await page.evaluate(() => localStorage.getItem('noor.theme'));
    expect(stored).toBe(afterClick);

    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', afterClick);
  });

  test('respects prefers-color-scheme: dark on first visit', async ({ browser }) => {
    const context = await browser.newContext({ colorScheme: 'dark' });
    const page = await context.newPage();
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await context.close();
  });

  test('respects prefers-color-scheme: light on first visit', async ({ browser }) => {
    const context = await browser.newContext({ colorScheme: 'light' });
    const page = await context.newPage();
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await context.close();
  });

  test('theme-color meta updates when theme changes', async ({ browser }) => {
    const context = await browser.newContext({ colorScheme: 'light' });
    const page = await context.newPage();
    await page.goto('/');
    await page.locator('#themeToggle').click();
    const meta = await page.locator('meta[name="theme-color"]').getAttribute('content');
    expect(meta).toBe('#07070D');
    await context.close();
  });

  test('dark mode applies dark background', async ({ browser }) => {
    const context = await browser.newContext({ colorScheme: 'dark' });
    const page = await context.newPage();
    await page.goto('/');
    const bg = await page.evaluate(() => {
      return getComputedStyle(document.body).backgroundColor;
    });
    const match = bg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    expect(match).not.toBeNull();
    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);
    expect(r + g + b).toBeLessThan(100);
    await context.close();
  });
});
