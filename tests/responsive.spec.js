const { test, expect } = require('@playwright/test');

test.describe('Responsive layouts', () => {
  test('desktop: nav menu visible, hamburger hidden', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await expect(page.locator('.nav-menu').first()).toBeVisible();
    await expect(page.locator('#hamburger')).toBeHidden();
  });

  test('desktop: share rail is visible', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await expect(page.locator('.share-rail')).toBeVisible();
  });

  test('mobile: hamburger visible, desktop nav hidden', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    await expect(page.locator('#hamburger')).toBeVisible();
    await expect(page.locator('.nav .nav-menu')).toBeHidden();
  });

  test('mobile: share rail is hidden', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    await expect(page.locator('.share-rail')).toBeHidden();
  });

  test('mobile: hamburger opens the mobile nav', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    const mobileNav = page.locator('#mobileNav');
    await expect(mobileNav).not.toHaveClass(/open/);
    await page.locator('#hamburger').click();
    await expect(mobileNav).toHaveClass(/open/);
    await expect(page.locator('#hamburger')).toHaveClass(/active/);
  });

  test('mobile: clicking a nav link closes the mobile nav', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    await page.locator('#hamburger').click();
    await expect(page.locator('#mobileNav')).toHaveClass(/open/);
    await page.locator('#mobileNav a[href="#articles"]').click();
    await expect(page.locator('#mobileNav')).not.toHaveClass(/open/);
  });

  test('mobile: Escape key closes the mobile nav', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    await page.locator('#hamburger').click();
    await expect(page.locator('#mobileNav')).toHaveClass(/open/);
    await page.keyboard.press('Escape');
    await expect(page.locator('#mobileNav')).not.toHaveClass(/open/);
  });

  test('mobile: body scroll lock active when menu is open', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    await page.locator('#hamburger').click();
    await expect(page.locator('body')).toHaveClass(/no-scroll/);
  });

  test('tablet: 2-column focus grid', async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 1024 });
    await page.goto('/');
    const cols = await page.evaluate(() => {
      const grid = document.querySelector('.focus-grid');
      return getComputedStyle(grid).gridTemplateColumns.split(' ').length;
    });
    expect(cols).toBe(2);
  });

  test('desktop: 4-column focus grid', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const cols = await page.evaluate(() => {
      const grid = document.querySelector('.focus-grid');
      return getComputedStyle(grid).gridTemplateColumns.split(' ').length;
    });
    expect(cols).toBe(4);
  });
});
