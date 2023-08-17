import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://localhost:5173/');
  await expect(page.getByRole('button', { name: 'Download' })).toHaveCount(1);
});