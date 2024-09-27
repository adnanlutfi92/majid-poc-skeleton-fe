import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/)
})

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await expect(page.getByRole('img', { name: 'Next.js logo' })).toBeVisible()
  await page.getByText('HomeContactGet started by').click()
  await page.getByRole('link', { name: 'Contact' }).click()
  await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible()
})
