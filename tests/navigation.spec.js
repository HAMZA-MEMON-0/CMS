const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders 7 primary nav links', async ({ page }) => {
    await expect(page.locator('.nav-menu .nav-link')).toHaveCount(7);
  });

  test('brand logo and name are visible', async ({ page }) => {
    await expect(page.locator('.header .brand')).toBeVisible();
    await expect(page.locator('.header .brand-name').first()).toContainText('Noor');
  });

  test('header is transparent at top, gets scrolled class on scroll', async ({ page }) => {
    const header = page.locator('#header');
    await expect(header).not.toHaveClass(/scrolled/);
    await page.evaluate(() => window.scrollTo(0, 200));
    await expect(header).toHaveClass(/scrolled/);
  });

  test('clicking nav link scrolls page to that section', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.locator('.nav-menu a[href="#articles"]').click();
    await page.waitForTimeout(1000);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(100);
  });

  test('scroll indicator anchors to focus area', async ({ page }) => {
    const scroll = page.locator('.scroll-indicator');
    await expect(scroll).toHaveAttribute('href', '#focus');
  });

  test('back-to-top click returns to top', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 2000));
    await expect(page.locator('#backToTop')).toHaveClass(/visible/);
    await page.locator('#backToTop').click();
    await page.waitForTimeout(800);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);
  });

  test('share rail has 6 buttons', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.locator('.share-rail .share-btn')).toHaveCount(6);
  });
});
