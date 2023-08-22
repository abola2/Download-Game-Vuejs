import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Download' }).click();
  await page.getByRole('combobox').click();
  await page.getByLabel('Buy').click();
  await page.getByRole('button', { name: 'Download' }).click();
  await page.getByRole('button', { name: 'Yes (no)' }).click();
  await page.getByRole('button', { name: 'Yes', exact: true }).click();
});