import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

// @ts-ignore
test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/program/);
});
