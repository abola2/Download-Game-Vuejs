import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
// Example
// Example
test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('div.greetings > h1')).toHaveText('You did it!');
})