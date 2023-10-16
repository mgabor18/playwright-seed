import { test, expect } from '@playwright/test';

test.describe('Web UI Demo', async () => {
  test('Github Homepage', async ({ page }) => {
    await test.step('Open Github', async () => {
      await page.goto('https://github.com/');
    });

    await test.step('Validate Homepage Header', async () => {
      return expect(page.getByLabel('Homepage', { exact: true })).toBeVisible({ timeout: 5000 });
    });
  });
});
