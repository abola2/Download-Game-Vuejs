import { test, expect } from '@playwright/test';



test('click button', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByRole('button', { name: 'Download' })).toHaveCount(1);
});

test('test combobox', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Download' }).click();
  await expect(page.getByRole('combobox')).toHaveCount(1);
  await page.getByRole('combobox').click();
  await expect(page.getByLabel('Buy')).toHaveCount(1);
  await page.getByLabel('Buy').click();
  await page.getByRole('button', { name: 'Download' }).click();
  await page.getByRole('button', { name: 'Yes (no)' }).click();
  await page.getByRole('button', { name: 'Yes', exact: true }).click();
});




