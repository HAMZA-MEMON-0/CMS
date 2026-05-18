const { test, expect } = require('@playwright/test');

test.describe('Internationalisation (EN / UR / AR)', () => {
  async function pickLanguage(page, lang) {
    await page.locator('#langCurrent').click();
    await expect(page.locator('#languageSwitcher')).toHaveClass(/open/);
    await page.locator(`button[data-lang="${lang}"]`).click();
  }

  test('defaults to English with ltr direction', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
    await expect(html).toHaveAttribute('dir', 'ltr');
  });

  test('language switcher dropdown opens on click', async ({ page }) => {
    await page.goto('/');
    const switcher = page.locator('#languageSwitcher');
    await expect(switcher).not.toHaveClass(/open/);
    await page.locator('#langCurrent').click();
    await expect(switcher).toHaveClass(/open/);
  });

  test('switching to Urdu applies lang=ur and dir=rtl', async ({ page }) => {
    await page.goto('/');
    await pickLanguage(page, 'ur');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'ur');
    await expect(html).toHaveAttribute('dir', 'rtl');
  });

  test('switching to Arabic applies lang=ar and dir=rtl', async ({ page }) => {
    await page.goto('/');
    await pickLanguage(page, 'ar');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'ar');
    await expect(html).toHaveAttribute('dir', 'rtl');
  });

  test('switching back to English restores ltr', async ({ page }) => {
    await page.goto('/');
    await pickLanguage(page, 'ar');
    await pickLanguage(page, 'en');
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
  });

  test('Urdu translation actually applies to nav', async ({ page }) => {
    await page.goto('/');
    await pickLanguage(page, 'ur');
    const homeLink = page.locator('.nav-menu a[href="#home"]').first();
    await expect(homeLink).toContainText('صفحہ اول');
  });

  test('Arabic translation actually applies to hero', async ({ page }) => {
    await page.goto('/');
    await pickLanguage(page, 'ar');
    const eyebrow = page.locator('.hero-eyebrow');
    await expect(eyebrow).toContainText('منصة');
  });

  test('language preference persists across reload', async ({ page }) => {
    await page.goto('/');
    await pickLanguage(page, 'ur');
    const stored = await page.evaluate(() => localStorage.getItem('noor.lang'));
    expect(stored).toBe('ur');
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('lang', 'ur');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  });

  test('language label in switcher updates', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#langLabel')).toContainText('EN');
    await pickLanguage(page, 'ur');
    await expect(page.locator('#langLabel')).toContainText('اردو');
  });

  test('document title updates with language', async ({ page }) => {
    await page.goto('/');
    await pickLanguage(page, 'ur');
    await expect(page).toHaveTitle(/نور/);
  });
});
