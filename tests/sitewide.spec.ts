import { test, expect } from '@playwright/test';

// Test all main pages for basic functionality
const pages = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/find-us', name: 'Find Us' },
  { path: '/subscriptions', name: 'Subscriptions' },
  { path: '/wholesale', name: 'Wholesale' },
];

test.describe('Essential Page Tests', () => {
  for (const page of pages) {
    test(`${page.name} page loads and works`, async ({ page: browserPage }) => {
      // Navigate and check basic loading
      const response = await browserPage.goto(page.path);
      expect(response?.status()).toBe(200);
      
      // Wait for page to be ready
      await browserPage.waitForLoadState('networkidle');
      
      // Check basic content
      const title = await browserPage.title();
      expect(title).toBeTruthy();
      
      // Check navigation is present
      const navbar = browserPage.locator('nav');
      await expect(navbar).toBeVisible();
      
      // Check that main navigation links work (use .first() to avoid duplicates)
      const subscriptionsLink = browserPage.locator('a[href="/subscriptions"]').first();
      await expect(subscriptionsLink).toBeVisible();
      
      // Test mobile responsiveness
      await browserPage.setViewportSize({ width: 375, height: 667 });
      await expect(navbar).toBeVisible();
    });
  }
});

test.describe('Key Functionality', () => {
  test('subscription form works', async ({ page }) => {
    await page.goto('/subscriptions');
    
    const planOptions = page.locator('[class*="border-2 rounded-lg p-4 cursor-pointer"]');
    await expect(planOptions.first()).toBeVisible();
  });

  test('contact form elements present', async ({ page }) => {
    await page.goto('/contact');
    
    const emailInput = page.locator('input[type="email"]');
    const submitButton = page.locator('button[type="submit"]');
    
    await expect(emailInput).toBeVisible();
    await expect(submitButton).toBeVisible();
  });
});
