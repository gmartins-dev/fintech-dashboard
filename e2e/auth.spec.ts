import { test, expect } from '@playwright/test'
import { login, logout } from './utils/auth'

test.describe('Authentication flows', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login')
    await page.waitForLoadState('domcontentloaded')
  })

  test('successful login flow', async ({ page }) => {
    await login(page, 'demo', 'demo')
    await expect(page.locator('text=Portfolio Overview')).toBeVisible()
  })

  test('unsuccessful login shows error', async ({ page }) => {
    await login(page, 'wrong', 'wrong')
    await expect(page.locator('text=Invalid credentials')).toBeVisible({
      timeout: 5000
    })
  })

  test('logout flow', async ({ page }) => {
    await login(page, 'demo', 'demo')
    await logout(page)
    await expect(page).toHaveURL('/login')
  })
})
