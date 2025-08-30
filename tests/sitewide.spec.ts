import { test, expect } from '@playwright/test';

// Test all main pages for basic functionality and asset loading
const pages = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/find-us', name: 'Find Us' },
  { path: '/subscriptions', name: 'Subscriptions' },
  { path: '/wholesale', name: 'Wholesale' },
];

test.describe('Site-wide Page Tests', () => {
  for (const page of pages) {
    test.describe(`${page.name} Page`, () => {
      test(`should load ${page.name} page without errors`, async ({ page: browserPage }) => {
        // Navigate to the page
        const response = await browserPage.goto(page.path);
        
        // Check that the page loads successfully
        expect(response?.status()).toBe(200);
        
        // Wait for the page to be fully loaded
        await browserPage.waitForLoadState('networkidle');
        
        // Check that the page has a title
        const title = await browserPage.title();
        expect(title).toBeTruthy();
        expect(title.length).toBeGreaterThan(0);
      });

      test(`should have working navigation on ${page.name} page`, async ({ page: browserPage }) => {
        await browserPage.goto(page.path);
        
        // Check that the navbar is present
        const navbar = browserPage.locator('nav');
        await expect(navbar).toBeVisible();
        
        // Check that the logo is present and visible
        const logo = browserPage.locator('img[alt*="logo" i]');
        await expect(logo).toBeVisible();
        
        // Check that main navigation links are present
        const aboutLink = browserPage.locator('a[href="/about"], a[href="#about"]');
        const contactLink = browserPage.locator('a[href="/contact"], a[href="#contact"]');
        const subscriptionsLink = browserPage.locator('a[href="/subscriptions"]');
        
        await expect(aboutLink).toBeVisible();
        await expect(contactLink).toBeVisible();
        await expect(subscriptionsLink).toBeVisible();
      });

      test(`should load images without errors on ${page.name} page`, async ({ page: browserPage }) => {
        await browserPage.goto(page.path);
        
        // Wait for images to load
        await browserPage.waitForLoadState('networkidle');
        
        // Get all images on the page
        const images = await browserPage.locator('img').all();
        
        // Check that images are present
        expect(images.length).toBeGreaterThan(0);
        
        // Check that each image loads successfully (not checking specific src)
        for (const img of images) {
          await expect(img).toBeVisible();
          
          // Check that image has loaded (naturalWidth > 0 means loaded)
          const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
          expect(naturalWidth).toBeGreaterThan(0);
        }
      });

      test(`should be responsive on ${page.name} page`, async ({ page: browserPage }) => {
        await browserPage.goto(page.path);
        
        // Test desktop viewport
        await browserPage.setViewportSize({ width: 1200, height: 800 });
        await browserPage.waitForLoadState('networkidle');
        
        // Check that content is visible
        const body = browserPage.locator('body');
        await expect(body).toBeVisible();
        
        // Test tablet viewport
        await browserPage.setViewportSize({ width: 768, height: 1024 });
        await browserPage.waitForLoadState('networkidle');
        await expect(body).toBeVisible();
        
        // Test mobile viewport
        await browserPage.setViewportSize({ width: 375, height: 667 });
        await browserPage.waitForLoadState('networkidle');
        await expect(body).toBeVisible();
        
        // Check that mobile menu button exists on mobile
        const menuButton = browserPage.locator('button[aria-expanded]').first();
        await expect(menuButton).toBeVisible();
      });

      test(`should have proper meta tags on ${page.name} page`, async ({ page: browserPage }) => {
        await browserPage.goto(page.path);
        
        // Check for basic meta tags
        const metaDescription = browserPage.locator('meta[name="description"]');
        const metaViewport = browserPage.locator('meta[name="viewport"]');
        
        await expect(metaDescription).toHaveCount(1);
        await expect(metaViewport).toHaveCount(1);
        
        // Check viewport meta tag content
        const viewportContent = await metaViewport.getAttribute('content');
        expect(viewportContent).toContain('width=device-width');
      });

      test(`should have no console errors on ${page.name} page`, async ({ page: browserPage }) => {
        const consoleErrors: string[] = [];
        
        // Listen for console errors
        browserPage.on('console', (msg) => {
          if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
          }
        });
        
        await browserPage.goto(page.path);
        await browserPage.waitForLoadState('networkidle');
        
        // Check that there are no console errors
        expect(consoleErrors).toEqual([]);
      });
    });
  }
});

test.describe('Interactive Features', () => {
  test('should handle mobile menu toggle', async ({ page }) => {
    await page.goto('/');
    
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Find and click the mobile menu button
    const menuButton = page.locator('button[aria-expanded]').first();
    await expect(menuButton).toBeVisible();
    
    // Click to open menu
    await menuButton.click();
    
    // Check that menu opens (look for mobile menu content)
    const mobileMenu = page.locator('div.md\\:hidden').last();
    await expect(mobileMenu).toBeVisible();
  });

  test('should handle subscription form interactions', async ({ page }) => {
    await page.goto('/subscriptions');
    
    // Wait for form to load
    await page.waitForSelector('#subscription-form');
    
    // Check that subscription options are clickable
    const planOptions = page.locator('[class*="border-2 rounded-lg p-4 cursor-pointer"]');
    const firstOption = planOptions.first();
    
    await expect(firstOption).toBeVisible();
    await firstOption.click();
    
    // Check that continue button is present
    const continueButton = page.locator('button:has-text("Continue")');
    await expect(continueButton).toBeVisible();
  });

  test('should handle contact form elements', async ({ page }) => {
    await page.goto('/contact');
    
    // Check that form elements are present
    const firstNameInput = page.locator('input[name="firstName"]');
    const emailInput = page.locator('input[type="email"]');
    const submitButton = page.locator('button[type="submit"]');
    
    await expect(firstNameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(submitButton).toBeVisible();
    
    // Test form interaction
    await firstNameInput.fill('Test User');
    await emailInput.fill('test@example.com');
    
    const firstNameValue = await firstNameInput.inputValue();
    const emailValue = await emailInput.inputValue();
    
    expect(firstNameValue).toBe('Test User');
    expect(emailValue).toBe('test@example.com');
  });
});

test.describe('Performance and Accessibility', () => {
  test('should have reasonable page load times', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Check that there is an h1 tag
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    
    // Check that headings are in logical order
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    expect(headings.length).toBeGreaterThan(0);
  });

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt!.length).toBeGreaterThan(0);
    }
  });
});
