import { test, expect } from '@playwright/test';



test('click button', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByRole('button', { class: 'btn-play col-lg-12' })).toHaveCount(1);
});

test('test combobox', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { class: 'btn-play col-lg-12' }).click();
  await expect(page.getByRole('combobox')).toHaveCount(1);
  await page.getByRole('combobox').click();
  await expect(page.getByLabel('Buy')).toHaveCount(1);
});


test('test popup', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { class: 'btn-play col-lg-12' }).click();
  await page.getByRole('combobox').click();
  await page.getByLabel('Buy').click();
  await page.getByRole('button', { name: 'Download' }).click();
  await page.getByText('Yes (no)').click();
  await expect(page.getByText('Yes (no)')).toBeHidden
  await page.getByText('Yes', { exact: true }).click();
  await expect(page.getByRole('button', { name: 'Yes', exact: true })).toHaveCount(0);
});

//getByText('Yes', { exact: true })

test('level1 complete', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { class: 'btn-play col-lg-12' }).click();
  await page.getByRole('combobox').click();
  await page.getByLabel('Tos').click();
  await page.getByText('Yes', { exact: true }).click();
  await expect(page.getByRole('button', { name: 'Yes', exact: true })).toHaveCount(0);
});




