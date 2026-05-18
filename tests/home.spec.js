const { test, expect } = require('@playwright/test');

test.describe('Home page — structure & content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads with Noor in title', async ({ page }) => {
    await expect(page).toHaveTitle(/Noor/);
  });

  test('all primary sections render', async ({ page }) => {
    await expect(page.locator('section#home')).toBeVisible();
    await expect(page.locator('section#focus')).toBeVisible();
    await expect(page.locator('section#articles')).toBeVisible();
    await expect(page.locator('section#media')).toBeAttached();
    await expect(page.locator('section#projects')).toBeAttached();
    await expect(page.locator('section#partners')).toBeAttached();
    await expect(page.locator('section#social')).toBeAttached();
    await expect(page.locator('section#newsletter')).toBeAttached();
    await expect(page.locator('footer#contact')).toBeAttached();
  });

  test('hero displays title, subtitle, and both CTAs', async ({ page }) => {
    const hero = page.locator('section.hero');
    await expect(hero.locator('h1.hero-title')).toBeVisible();
    await expect(hero.locator('.hero-subtitle')).toBeVisible();
    await expect(hero.locator('a.btn.btn-primary')).toBeVisible();
    await expect(hero.locator('a.btn.btn-outline')).toBeVisible();
  });

  test('exactly 8 focus area cards', async ({ page }) => {
    const cards = page.locator('.focus-grid .focus-card');
    await expect(cards).toHaveCount(8);
  });

  test('exactly 6 article cards', async ({ page }) => {
    const articles = page.locator('.articles-grid .article-card');
    await expect(articles).toHaveCount(6);
  });

  test('exactly 12 partner logos', async ({ page }) => {
    const logos = page.locator('.partners-grid .partner-logo');
    await expect(logos).toHaveCount(12);
  });

  test('exactly 3 social feed cards', async ({ page }) => {
    const feeds = page.locator('.social-grid .social-feed');
    await expect(feeds).toHaveCount(3);
  });

  test('Hamza Memon credit appears in footer', async ({ page }) => {
    const credit = page.locator('.dev-credit');
    await expect(credit).toContainText('Hamza Memon');
    await expect(credit).toContainText('hamza.memon262830@gmail.com');
  });

  test('SEO meta tags are present', async ({ page }) => {
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /Noor/);
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'website');
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /noor/);
  });

  test('JSON-LD organization schema is present', async ({ page }) => {
    const ldJson = await page.locator('script[type="application/ld+json"]').textContent();
    const data = JSON.parse(ldJson);
    expect(data['@type']).toBe('Organization');
    expect(data.name).toBe('Noor');
  });

  test('skip-to-content link exists', async ({ page }) => {
    await expect(page.locator('.skip-link')).toBeAttached();
  });

  test('back-to-top button is hidden initially', async ({ page }) => {
    await expect(page.locator('#backToTop')).not.toHaveClass(/visible/);
  });

  test('back-to-top button appears after scrolling', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 1000));
    await expect(page.locator('#backToTop')).toHaveClass(/visible/);
  });
});
